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
/**
 * 
 * @export
 * @interface AccountResourceRelationshipsTransactionsLinks
 */
export interface AccountResourceRelationshipsTransactionsLinks {
    /**
     * The link to retrieve the related resource(s) in this relationship.
     * @type {string}
     * @memberof AccountResourceRelationshipsTransactionsLinks
     */
    related: string;
}

/**
 * Check if a given object implements the AccountResourceRelationshipsTransactionsLinks interface.
 */
export function instanceOfAccountResourceRelationshipsTransactionsLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "related" in value;

    return isInstance;
}

export function AccountResourceRelationshipsTransactionsLinksFromJSON(json: any): AccountResourceRelationshipsTransactionsLinks {
    return AccountResourceRelationshipsTransactionsLinksFromJSONTyped(json, false);
}

export function AccountResourceRelationshipsTransactionsLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResourceRelationshipsTransactionsLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'related': json['related'],
    };
}

export function AccountResourceRelationshipsTransactionsLinksToJSON(value?: AccountResourceRelationshipsTransactionsLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'related': value.related,
    };
}

