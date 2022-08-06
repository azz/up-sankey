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
import type { WebhookInputResourceAttributes } from './WebhookInputResourceAttributes';
import {
    WebhookInputResourceAttributesFromJSON,
    WebhookInputResourceAttributesFromJSONTyped,
    WebhookInputResourceAttributesToJSON,
} from './WebhookInputResourceAttributes';

/**
 * Represents a webhook specified as request input.
 * @export
 * @interface WebhookInputResource
 */
export interface WebhookInputResource {
    /**
     * 
     * @type {WebhookInputResourceAttributes}
     * @memberof WebhookInputResource
     */
    attributes: WebhookInputResourceAttributes;
}

/**
 * Check if a given object implements the WebhookInputResource interface.
 */
export function instanceOfWebhookInputResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function WebhookInputResourceFromJSON(json: any): WebhookInputResource {
    return WebhookInputResourceFromJSONTyped(json, false);
}

export function WebhookInputResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookInputResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': WebhookInputResourceAttributesFromJSON(json['attributes']),
    };
}

export function WebhookInputResourceToJSON(value?: WebhookInputResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attributes': WebhookInputResourceAttributesToJSON(value.attributes),
    };
}

