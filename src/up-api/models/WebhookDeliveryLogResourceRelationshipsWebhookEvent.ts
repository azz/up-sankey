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
import type { WebhookDeliveryLogResourceRelationshipsWebhookEventData } from './WebhookDeliveryLogResourceRelationshipsWebhookEventData';
import {
    WebhookDeliveryLogResourceRelationshipsWebhookEventDataFromJSON,
    WebhookDeliveryLogResourceRelationshipsWebhookEventDataFromJSONTyped,
    WebhookDeliveryLogResourceRelationshipsWebhookEventDataToJSON,
} from './WebhookDeliveryLogResourceRelationshipsWebhookEventData';

/**
 * 
 * @export
 * @interface WebhookDeliveryLogResourceRelationshipsWebhookEvent
 */
export interface WebhookDeliveryLogResourceRelationshipsWebhookEvent {
    /**
     * 
     * @type {WebhookDeliveryLogResourceRelationshipsWebhookEventData}
     * @memberof WebhookDeliveryLogResourceRelationshipsWebhookEvent
     */
    data: WebhookDeliveryLogResourceRelationshipsWebhookEventData;
}

/**
 * Check if a given object implements the WebhookDeliveryLogResourceRelationshipsWebhookEvent interface.
 */
export function instanceOfWebhookDeliveryLogResourceRelationshipsWebhookEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function WebhookDeliveryLogResourceRelationshipsWebhookEventFromJSON(json: any): WebhookDeliveryLogResourceRelationshipsWebhookEvent {
    return WebhookDeliveryLogResourceRelationshipsWebhookEventFromJSONTyped(json, false);
}

export function WebhookDeliveryLogResourceRelationshipsWebhookEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookDeliveryLogResourceRelationshipsWebhookEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': WebhookDeliveryLogResourceRelationshipsWebhookEventDataFromJSON(json['data']),
    };
}

export function WebhookDeliveryLogResourceRelationshipsWebhookEventToJSON(value?: WebhookDeliveryLogResourceRelationshipsWebhookEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': WebhookDeliveryLogResourceRelationshipsWebhookEventDataToJSON(value.data),
    };
}
