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
import type { GetTransactionResponseData } from './GetTransactionResponseData';
import {
    GetTransactionResponseDataFromJSON,
    GetTransactionResponseDataFromJSONTyped,
    GetTransactionResponseDataToJSON,
} from './GetTransactionResponseData';

/**
 * Successful response to get a single transaction.
 * @export
 * @interface GetTransactionResponse
 */
export interface GetTransactionResponse {
    /**
     * 
     * @type {GetTransactionResponseData}
     * @memberof GetTransactionResponse
     */
    data: GetTransactionResponseData;
}

/**
 * Check if a given object implements the GetTransactionResponse interface.
 */
export function instanceOfGetTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GetTransactionResponseFromJSON(json: any): GetTransactionResponse {
    return GetTransactionResponseFromJSONTyped(json, false);
}

export function GetTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GetTransactionResponseDataFromJSON(json['data']),
    };
}

export function GetTransactionResponseToJSON(value?: GetTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GetTransactionResponseDataToJSON(value.data),
    };
}

