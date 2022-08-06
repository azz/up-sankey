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
 * Information about the response that was received from the webhook URL.
 * @export
 * @interface WebhookDeliveryLogResourceAttributesResponse
 */
export interface WebhookDeliveryLogResourceAttributesResponse {
    /**
     * The HTTP status code received in the response.
     * @type {number}
     * @memberof WebhookDeliveryLogResourceAttributesResponse
     */
    statusCode: number;
    /**
     * The payload that was received in the response body.
     * @type {string}
     * @memberof WebhookDeliveryLogResourceAttributesResponse
     */
    body: string;
}

/**
 * Check if a given object implements the WebhookDeliveryLogResourceAttributesResponse interface.
 */
export function instanceOfWebhookDeliveryLogResourceAttributesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "statusCode" in value;
    isInstance = isInstance && "body" in value;

    return isInstance;
}

export function WebhookDeliveryLogResourceAttributesResponseFromJSON(json: any): WebhookDeliveryLogResourceAttributesResponse {
    return WebhookDeliveryLogResourceAttributesResponseFromJSONTyped(json, false);
}

export function WebhookDeliveryLogResourceAttributesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookDeliveryLogResourceAttributesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statusCode': json['statusCode'],
        'body': json['body'],
    };
}

export function WebhookDeliveryLogResourceAttributesResponseToJSON(value?: WebhookDeliveryLogResourceAttributesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statusCode': value.statusCode,
        'body': value.body,
    };
}
