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
import type { WebhookDeliveryLogResourceAttributesRequest } from './WebhookDeliveryLogResourceAttributesRequest';
import {
    WebhookDeliveryLogResourceAttributesRequestFromJSON,
    WebhookDeliveryLogResourceAttributesRequestFromJSONTyped,
    WebhookDeliveryLogResourceAttributesRequestToJSON,
} from './WebhookDeliveryLogResourceAttributesRequest';
import type { WebhookDeliveryLogResourceAttributesResponse } from './WebhookDeliveryLogResourceAttributesResponse';
import {
    WebhookDeliveryLogResourceAttributesResponseFromJSON,
    WebhookDeliveryLogResourceAttributesResponseFromJSONTyped,
    WebhookDeliveryLogResourceAttributesResponseToJSON,
} from './WebhookDeliveryLogResourceAttributesResponse';
import type { WebhookDeliveryStatusEnum } from './WebhookDeliveryStatusEnum';
import {
    WebhookDeliveryStatusEnumFromJSON,
    WebhookDeliveryStatusEnumFromJSONTyped,
    WebhookDeliveryStatusEnumToJSON,
} from './WebhookDeliveryStatusEnum';

/**
 * 
 * @export
 * @interface WebhookDeliveryLogResourceAttributes
 */
export interface WebhookDeliveryLogResourceAttributes {
    /**
     * 
     * @type {WebhookDeliveryLogResourceAttributesRequest}
     * @memberof WebhookDeliveryLogResourceAttributes
     */
    request: WebhookDeliveryLogResourceAttributesRequest;
    /**
     * 
     * @type {WebhookDeliveryLogResourceAttributesResponse}
     * @memberof WebhookDeliveryLogResourceAttributes
     */
    response: WebhookDeliveryLogResourceAttributesResponse | null;
    /**
     * The success or failure status of this delivery attempt.
     * @type {WebhookDeliveryStatusEnum}
     * @memberof WebhookDeliveryLogResourceAttributes
     */
    deliveryStatus: WebhookDeliveryStatusEnum | null;
    /**
     * The date-time at which this log entry was created.
     * @type {Date}
     * @memberof WebhookDeliveryLogResourceAttributes
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the WebhookDeliveryLogResourceAttributes interface.
 */
export function instanceOfWebhookDeliveryLogResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "request" in value;
    isInstance = isInstance && "response" in value;
    isInstance = isInstance && "deliveryStatus" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function WebhookDeliveryLogResourceAttributesFromJSON(json: any): WebhookDeliveryLogResourceAttributes {
    return WebhookDeliveryLogResourceAttributesFromJSONTyped(json, false);
}

export function WebhookDeliveryLogResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookDeliveryLogResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'request': WebhookDeliveryLogResourceAttributesRequestFromJSON(json['request']),
        'response': WebhookDeliveryLogResourceAttributesResponseFromJSON(json['response']),
        'deliveryStatus': WebhookDeliveryStatusEnumFromJSON(json['deliveryStatus']),
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function WebhookDeliveryLogResourceAttributesToJSON(value?: WebhookDeliveryLogResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'request': WebhookDeliveryLogResourceAttributesRequestToJSON(value.request),
        'response': WebhookDeliveryLogResourceAttributesResponseToJSON(value.response),
        'deliveryStatus': WebhookDeliveryStatusEnumToJSON(value.deliveryStatus),
        'createdAt': (value.createdAt.toISOString()),
    };
}

