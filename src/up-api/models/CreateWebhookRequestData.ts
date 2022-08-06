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
import type { WebhookInputResource } from './WebhookInputResource';
import {
    WebhookInputResourceFromJSON,
    WebhookInputResourceFromJSONTyped,
    WebhookInputResourceToJSON,
} from './WebhookInputResource';
import type { WebhookInputResourceAttributes } from './WebhookInputResourceAttributes';
import {
    WebhookInputResourceAttributesFromJSON,
    WebhookInputResourceAttributesFromJSONTyped,
    WebhookInputResourceAttributesToJSON,
} from './WebhookInputResourceAttributes';

/**
 * The webhook resource to create.
 * @export
 * @interface CreateWebhookRequestData
 */
export interface CreateWebhookRequestData {
    /**
     * 
     * @type {WebhookInputResourceAttributes}
     * @memberof CreateWebhookRequestData
     */
    attributes: WebhookInputResourceAttributes;
}

/**
 * Check if a given object implements the CreateWebhookRequestData interface.
 */
export function instanceOfCreateWebhookRequestData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attributes" in value;

    return isInstance;
}

export function CreateWebhookRequestDataFromJSON(json: any): CreateWebhookRequestData {
    return CreateWebhookRequestDataFromJSONTyped(json, false);
}

export function CreateWebhookRequestDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWebhookRequestData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attributes': WebhookInputResourceAttributesFromJSON(json['attributes']),
    };
}

export function CreateWebhookRequestDataToJSON(value?: CreateWebhookRequestData | null): any {
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
