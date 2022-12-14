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
 * If applicable, location in the request that this error relates to. This
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 * @export
 * @interface ErrorObjectSource
 */
export interface ErrorObjectSource {
    /**
     * If this error relates to a query parameter, the name of the
     * parameter.
     * @type {string}
     * @memberof ErrorObjectSource
     */
    parameter?: string;
    /**
     * If this error relates to an attribute in the request body, a
     * rfc-6901 JSON pointer to the attribute.
     * @type {string}
     * @memberof ErrorObjectSource
     */
    pointer?: string;
}

/**
 * Check if a given object implements the ErrorObjectSource interface.
 */
export function instanceOfErrorObjectSource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ErrorObjectSourceFromJSON(json: any): ErrorObjectSource {
    return ErrorObjectSourceFromJSONTyped(json, false);
}

export function ErrorObjectSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorObjectSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'pointer': !exists(json, 'pointer') ? undefined : json['pointer'],
    };
}

export function ErrorObjectSourceToJSON(value?: ErrorObjectSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parameter': value.parameter,
        'pointer': value.pointer,
    };
}

