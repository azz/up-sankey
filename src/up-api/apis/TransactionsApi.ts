/* tslint:disable */
/* eslint-disable */
/**
 * Up API
 * The Up API gives you programmatic access to your balances and transaction data. You can request past transactions or set up webhooks to receive real-time events when new transactions hit your account. It’s new, it’s exciting and it’s just the beginning. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetTransactionResponse,
  ListTransactionsResponse,
  TransactionStatusEnum,
} from '../models';
import {
    GetTransactionResponseFromJSON,
    GetTransactionResponseToJSON,
    ListTransactionsResponseFromJSON,
    ListTransactionsResponseToJSON,
    TransactionStatusEnumFromJSON,
    TransactionStatusEnumToJSON,
} from '../models';

export interface AccountsAccountIdTransactionsGetRequest {
    accountId: string;
    pageSize?: number;
    filterStatus?: TransactionStatusEnum;
    filterSince?: Date;
    filterUntil?: Date;
    filterCategory?: string;
    filterTag?: string;
}

export interface TransactionsGetRequest {
    pageSize?: number;
    filterStatus?: TransactionStatusEnum;
    filterSince?: Date;
    filterUntil?: Date;
    filterCategory?: string;
    filterTag?: string;
}

export interface TransactionsIdGetRequest {
    id: string;
}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI {

    /**
     * Retrieve a list of all transactions for a specific account. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. To narrow the results to a specific date range pass one or both of `filter[since]` and `filter[until]` in the query string. These filter parameters **should not** be used for pagination. Results are ordered newest first to oldest last. 
     * List transactions by account
     */
    async accountsAccountIdTransactionsGetRaw(requestParameters: AccountsAccountIdTransactionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTransactionsResponse>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling accountsAccountIdTransactionsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        if (requestParameters.filterStatus !== undefined) {
            queryParameters['filter[status]'] = requestParameters.filterStatus;
        }

        if (requestParameters.filterSince !== undefined) {
            queryParameters['filter[since]'] = (requestParameters.filterSince as any).toISOString();
        }

        if (requestParameters.filterUntil !== undefined) {
            queryParameters['filter[until]'] = (requestParameters.filterUntil as any).toISOString();
        }

        if (requestParameters.filterCategory !== undefined) {
            queryParameters['filter[category]'] = requestParameters.filterCategory;
        }

        if (requestParameters.filterTag !== undefined) {
            queryParameters['filter[tag]'] = requestParameters.filterTag;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/accounts/{accountId}/transactions`.replace(`{${"accountId"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all transactions for a specific account. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. To narrow the results to a specific date range pass one or both of `filter[since]` and `filter[until]` in the query string. These filter parameters **should not** be used for pagination. Results are ordered newest first to oldest last. 
     * List transactions by account
     */
    async accountsAccountIdTransactionsGet(requestParameters: AccountsAccountIdTransactionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTransactionsResponse> {
        const response = await this.accountsAccountIdTransactionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of all transactions across all accounts for the currently authenticated user. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. To narrow the results to a specific date range pass one or both of `filter[since]` and `filter[until]` in the query string. These filter parameters **should not** be used for pagination. Results are ordered newest first to oldest last. 
     * List transactions
     */
    async transactionsGetRaw(requestParameters: TransactionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListTransactionsResponse>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        if (requestParameters.filterStatus !== undefined) {
            queryParameters['filter[status]'] = requestParameters.filterStatus;
        }

        if (requestParameters.filterSince !== undefined) {
            queryParameters['filter[since]'] = (requestParameters.filterSince as any).toISOString();
        }

        if (requestParameters.filterUntil !== undefined) {
            queryParameters['filter[until]'] = (requestParameters.filterUntil as any).toISOString();
        }

        if (requestParameters.filterCategory !== undefined) {
            queryParameters['filter[category]'] = requestParameters.filterCategory;
        }

        if (requestParameters.filterTag !== undefined) {
            queryParameters['filter[tag]'] = requestParameters.filterTag;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of all transactions across all accounts for the currently authenticated user. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. To narrow the results to a specific date range pass one or both of `filter[since]` and `filter[until]` in the query string. These filter parameters **should not** be used for pagination. Results are ordered newest first to oldest last. 
     * List transactions
     */
    async transactionsGet(requestParameters: TransactionsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListTransactionsResponse> {
        const response = await this.transactionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a specific transaction by providing its unique identifier. 
     * Retrieve transaction
     */
    async transactionsIdGetRaw(requestParameters: TransactionsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTransactionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling transactionsIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/transactions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTransactionResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a specific transaction by providing its unique identifier. 
     * Retrieve transaction
     */
    async transactionsIdGet(requestParameters: TransactionsIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTransactionResponse> {
        const response = await this.transactionsIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
