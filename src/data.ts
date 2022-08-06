import { DefaultLink, DefaultNode } from "@nivo/sankey";
import groupBy from "lodash/groupBy";
import mapValues from "lodash/mapValues";
import sumBy from "lodash/sumBy";
import map from "lodash/map";
import zipObject from "lodash/zipObject";
import sortBy from "lodash/sortBy";
import {
  AccountsAccountIdTransactionsGetRequest,
  AccountsApi,
  BaseAPI,
  CategoriesApi,
  Configuration,
  DefaultConfig,
  ListTransactionsResponse,
  TransactionResource,
  TransactionsApi,
} from "./up-api";

const accountsApi = new AccountsApi();
const transactionsApi = new TransactionsApi();
const categoriesApi = new CategoriesApi();

export async function getSankeyData(opts: {
  token: string;
  startDate: Date;
  endDate: Date;
  includeUncategorised: boolean;
  include2Up: boolean;
}) {
  if (!opts.token.startsWith("up:yeah:")) {
    throw new Error("That doesn't look like a valid Up personal access token.");
  }

  DefaultConfig.config = new Configuration({ accessToken: opts.token });

  const accounts = await accountsApi.accountsGet();
  const transactionalAccounts = accounts.data.filter(
    (account) =>
      (opts.include2Up || account.attributes.ownershipType === "INDIVIDUAL") &&
      account.attributes.accountType === "TRANSACTIONAL"
  );

  const spendingNode = { id: "Spending" };
  const savingNode = { id: "Savings" };
  const uncategorisedNode = { id: "Uncategorised" };
  const salaryNode = { id: "💰/💸" };

  const { data: categories } = await categoriesApi.categoriesGet();

  const transactions: TransactionResource[] = [];
  for (const account of transactionalAccounts) {
    const data = await getPaginatedTransactions({
      accountId: account.id,
      filterSince: opts.startDate,
      filterUntil: opts.endDate,
      pageSize: 100,
    });
    transactions.push(...data);
  }

  const categoriesById = zipObject(
    categories.map((c) => c.id),
    categories
  );

  const accountsById = zipObject(
    accounts.data.map((a) => a.id),
    accounts.data
  );

  if (opts.includeUncategorised) {
    categoriesById["uncategorised"] = {
      id: "uncategorised",
      type: "categories",
      attributes: { name: uncategorisedNode.id },
      relationships: {
        parent: { data: { id: "Spending", type: "categories" } },
        children: { data: null },
      },
    };
  }

  const expenses = transactions.filter(
    (txn) =>
      txn.attributes.amount.valueInBaseUnits < 0 &&
      txn.attributes.amount.currencyCode === "AUD" &&
      txn.relationships.transferAccount.data == null &&
      (opts.includeUncategorised || txn.relationships.category.data != null) &&
      // assume that uncategorised transactions without rawText are _not_ expenses
      (txn.relationships.category.data != null ||
        txn.attributes.rawText != null)
  );
  const savings = transactions.filter(
    (txn) =>
      txn.relationships.transferAccount.data != null &&
      accounts.data.find(
        (account) => account.id === txn.relationships.transferAccount.data.id
      )?.attributes.accountType === "SAVER"
  );
  const salaries = transactions.filter(
    (txn) =>
      txn.attributes.amount.valueInBaseUnits > 0 &&
      txn.relationships.transferAccount.data == null &&
      // exclude some non-salary incomings from deleted savers and Up-to-Up payments
      !txn.attributes.description?.startsWith("Transfer from ") &&
      !txn.attributes.description?.startsWith("Final interest payment from ") &&
      !txn.attributes.description?.startsWith("$")
  );

  const groupedTransactions = groupBy(
    expenses,
    (transaction) =>
      transaction.relationships.category.data?.id ?? "uncategorised"
  );

  const categoryTotals = mapValues(
    groupedTransactions,
    (categoryTransactions) =>
      sumBy(
        categoryTransactions,
        (transaction) => -transaction.attributes.amount.valueInBaseUnits
      )
  );
  const categoryLinks = sortByValue(
    map(categoryTotals, (total, categoryId) => ({
      value: total,
      source: spendingNode.id,
      target: categoriesById[categoryId].attributes.name,
    }))
  );

  const groupedSavings = groupBy(
    savings,
    (transaction) => transaction.relationships.transferAccount.data.id
  );
  const savingsTotals = mapValues(groupedSavings, (savingsTransactions) =>
    sumBy(
      savingsTransactions,
      (transaction) => -transaction.attributes.amount.valueInBaseUnits
    )
  );
  for (const key in savingsTotals) {
    if (savingsTotals[key] <= 0) delete savingsTotals[key];
  }

  const savingsLinks = sortByValue(
    map(savingsTotals, (total, accountId) => ({
      value: total,
      source: savingNode.id,
      target: accountsById[accountId].attributes.displayName,
    }))
  );

  const groupedSalaries = groupBy(
    salaries,
    (transaction) => transaction.attributes.description
  );
  const salariesTotals = mapValues(groupedSalaries, (salariesTransactions) =>
    sumBy(
      salariesTransactions,
      (transaction) => transaction.attributes.amount.valueInBaseUnits
    )
  );
  const salariesLinks = sortByValue(
    map(salariesTotals, (total, description) => ({
      value: total,
      source: description,
      target: salaryNode.id,
    }))
  );

  const salaryToSpendingLink = {
    source: salaryNode.id,
    target: spendingNode.id,
    value: sumBy(categoryLinks, (link) => link.value),
  };
  const salaryToSavingLink = {
    source: salaryNode.id,
    target: savingNode.id,
    value: sumBy(savingsLinks, (link) => link.value),
  };

  return {
    links: [
      ...salariesLinks,
      salaryToSpendingLink,
      ...categoryLinks,
      salaryToSavingLink,
      ...savingsLinks,
    ],
    nodes: [
      ...nodesFromLinks(salariesLinks, false),
      salaryNode,
      spendingNode,
      savingNode,
      ...nodesFromLinks(categoryLinks),
      ...nodesFromLinks(savingsLinks),
    ],
    transactionCount: transactions.length,
  };
}

function sortByValue(links: DefaultLink[]): DefaultLink[] {
  return sortBy(links, (link) => -link.value);
}

function nodesFromLinks(
  links: DefaultLink[],
  byTarget: boolean = true
): DefaultNode[] {
  return links.map((link) => ({
    id: byTarget ? link.target : link.source,
  }));
}

class PaginatedAPI extends BaseAPI {
  async getNext<T>(apiLinks: { next: string }) {
    const token = this.configuration.accessToken;
    const tokenString = await token("bearer_auth", []);
    const response = await this.request({
      path: apiLinks.next.replace(this.configuration.basePath, ""),
      method: "GET",
      headers: { Authorization: `Bearer ${tokenString}` },
    });
    return (await response.json()) as T;
  }
}

const client = new PaginatedAPI();

async function getPaginatedTransactions(
  request: AccountsAccountIdTransactionsGetRequest
) {
  const transactions: TransactionResource[] = [];
  let { data, links } = await transactionsApi.accountsAccountIdTransactionsGet(
    request
  );
  transactions.push(...data);

  while (links.next) {
    const next = await client.getNext<ListTransactionsResponse>(links);
    transactions.push(...next.data);
    links = next.links;
  }

  return transactions;
}
