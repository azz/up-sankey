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
import type { WebhookEventResource } from './WebhookEventResource';
import {
    WebhookEventResourceFromJSON,
    WebhookEventResourceFromJSONTyped,
    WebhookEventResourceToJSON,
} from './WebhookEventResource';
import type { WebhookEventResourceAttributes } from './WebhookEventResourceAttributes';
import {
    WebhookEventResourceAttributesFromJSON,
    WebhookEventResourceAttributesFromJSONTyped,
    WebhookEventResourceAttributesToJSON,
} from './WebhookEventResourceAttributes';
import type { WebhookEventResourceRelationships } from './WebhookEventResourceRelationships';
import {
    WebhookEventResourceRelationshipsFromJSON,
    WebhookEventResourceRelationshipsFromJSONTyped,
    WebhookEventResourceRelationshipsToJSON,
} from './WebhookEventResourceRelationships';

/**
 * The webhook event data sent to the subscribed webhook.
 * @export
 * @interface WebhookEventCallbackData
 */
export interface WebhookEventCallbackData {
    /**
     * The type of this resource: `webhook-events`
     * @type {string}
     * @memberof WebhookEventCallbackData
     */
    type: string;
    /**
     * The unique identifier for this event. This will remain constant across
     * delivery retries.
     * @type {string}
     * @memberof WebhookEventCallbackData
     */
    id: string;
    /**
     * 
     * @type {WebhookEventResourceAttributes}
     * @memberof WebhookEventCallbackData
     */
    attributes: WebhookEventResourceAttributes;
    /**
     * 
     * @type {WebhookEventResourceRelationships}
     * @memberof WebhookEventCallbackData
     */
    relationships: WebhookEventResourceRelationships;
}

/**
 * Check if a given object implements the WebhookEventCallbackData interface.
 */
export function instanceOfWebhookEventCallbackData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function WebhookEventCallbackDataFromJSON(json: any): WebhookEventCallbackData {
    return WebhookEventCallbackDataFromJSONTyped(json, false);
}

export function WebhookEventCallbackDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookEventCallbackData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': WebhookEventResourceAttributesFromJSON(json['attributes']),
        'relationships': WebhookEventResourceRelationshipsFromJSON(json['relationships']),
    };
}

export function WebhookEventCallbackDataToJSON(value?: WebhookEventCallbackData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': WebhookEventResourceAttributesToJSON(value.attributes),
        'relationships': WebhookEventResourceRelationshipsToJSON(value.relationships),
    };
}

