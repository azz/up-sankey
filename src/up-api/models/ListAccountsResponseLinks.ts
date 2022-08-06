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
 * @interface ListAccountsResponseLinks
 */
export interface ListAccountsResponseLinks {
    /**
     * The link to the previous page in the results. If this value is `null`
     * there is no previous page.
     * @type {string}
     * @memberof ListAccountsResponseLinks
     */
    prev: string | null;
    /**
     * The link to the next page in the results. If this value is `null`
     * there is no next page.
     * @type {string}
     * @memberof ListAccountsResponseLinks
     */
    next: string | null;
}

/**
 * Check if a given object implements the ListAccountsResponseLinks interface.
 */
export function instanceOfListAccountsResponseLinks(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "prev" in value;
    isInstance = isInstance && "next" in value;

    return isInstance;
}

export function ListAccountsResponseLinksFromJSON(json: any): ListAccountsResponseLinks {
    return ListAccountsResponseLinksFromJSONTyped(json, false);
}

export function ListAccountsResponseLinksFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListAccountsResponseLinks {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prev': json['prev'],
        'next': json['next'],
    };
}

export function ListAccountsResponseLinksToJSON(value?: ListAccountsResponseLinks | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prev': value.prev,
        'next': value.next,
    };
}
