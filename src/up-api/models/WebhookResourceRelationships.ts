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
import type { AccountResourceRelationshipsTransactions } from './AccountResourceRelationshipsTransactions';
import {
    AccountResourceRelationshipsTransactionsFromJSON,
    AccountResourceRelationshipsTransactionsFromJSONTyped,
    AccountResourceRelationshipsTransactionsToJSON,
} from './AccountResourceRelationshipsTransactions';

/**
 * 
 * @export
 * @interface WebhookResourceRelationships
 */
export interface WebhookResourceRelationships {
    /**
     * 
     * @type {AccountResourceRelationshipsTransactions}
     * @memberof WebhookResourceRelationships
     */
    logs: AccountResourceRelationshipsTransactions;
}

/**
 * Check if a given object implements the WebhookResourceRelationships interface.
 */
export function instanceOfWebhookResourceRelationships(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "logs" in value;

    return isInstance;
}

export function WebhookResourceRelationshipsFromJSON(json: any): WebhookResourceRelationships {
    return WebhookResourceRelationshipsFromJSONTyped(json, false);
}

export function WebhookResourceRelationshipsFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookResourceRelationships {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'logs': AccountResourceRelationshipsTransactionsFromJSON(json['logs']),
    };
}

export function WebhookResourceRelationshipsToJSON(value?: WebhookResourceRelationships | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'logs': AccountResourceRelationshipsTransactionsToJSON(value.logs),
    };
}
