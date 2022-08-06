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
 * @interface WebhookEventResourceRelationshipsWebhookData
 */
export interface WebhookEventResourceRelationshipsWebhookData {
    /**
     * The type of this resource: `webhooks`
     * @type {string}
     * @memberof WebhookEventResourceRelationshipsWebhookData
     */
    type: string;
    /**
     * The unique identifier of the resource within its type.
     * @type {string}
     * @memberof WebhookEventResourceRelationshipsWebhookData
     */
    id: string;
}

/**
 * Check if a given object implements the WebhookEventResourceRelationshipsWebhookData interface.
 */
export function instanceOfWebhookEventResourceRelationshipsWebhookData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function WebhookEventResourceRelationshipsWebhookDataFromJSON(json: any): WebhookEventResourceRelationshipsWebhookData {
    return WebhookEventResourceRelationshipsWebhookDataFromJSONTyped(json, false);
}

export function WebhookEventResourceRelationshipsWebhookDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEventResourceRelationshipsWebhookData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function WebhookEventResourceRelationshipsWebhookDataToJSON(value?: WebhookEventResourceRelationshipsWebhookData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

