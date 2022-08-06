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

import { exists, mapValues } from '../runtime';
import type { AccountResourceRelationshipsTransactionsLinks } from './AccountResourceRelationshipsTransactionsLinks';
import {
    AccountResourceRelationshipsTransactionsLinksFromJSON,
    AccountResourceRelationshipsTransactionsLinksFromJSONTyped,
    AccountResourceRelationshipsTransactionsLinksToJSON,
} from './AccountResourceRelationshipsTransactionsLinks';
import type { TransactionResourceRelationshipsAccountData } from './TransactionResourceRelationshipsAccountData';
import {
    TransactionResourceRelationshipsAccountDataFromJSON,
    TransactionResourceRelationshipsAccountDataFromJSONTyped,
    TransactionResourceRelationshipsAccountDataToJSON,
} from './TransactionResourceRelationshipsAccountData';

/**
 * 
 * @export
 * @interface TransactionResourceRelationshipsAccount
 */
export interface TransactionResourceRelationshipsAccount {
    /**
     * 
     * @type {TransactionResourceRelationshipsAccountData}
     * @memberof TransactionResourceRelationshipsAccount
     */
    data: TransactionResourceRelationshipsAccountData;
    /**
     * 
     * @type {AccountResourceRelationshipsTransactionsLinks}
     * @memberof TransactionResourceRelationshipsAccount
     */
    links?: AccountResourceRelationshipsTransactionsLinks;
}

/**
 * Check if a given object implements the TransactionResourceRelationshipsAccount interface.
 */
export function instanceOfTransactionResourceRelationshipsAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TransactionResourceRelationshipsAccountFromJSON(json: any): TransactionResourceRelationshipsAccount {
    return TransactionResourceRelationshipsAccountFromJSONTyped(json, false);
}

export function TransactionResourceRelationshipsAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResourceRelationshipsAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TransactionResourceRelationshipsAccountDataFromJSON(json['data']),
        'links': !exists(json, 'links') ? undefined : AccountResourceRelationshipsTransactionsLinksFromJSON(json['links']),
    };
}

export function TransactionResourceRelationshipsAccountToJSON(value?: TransactionResourceRelationshipsAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TransactionResourceRelationshipsAccountDataToJSON(value.data),
        'links': AccountResourceRelationshipsTransactionsLinksToJSON(value.links),
    };
}

