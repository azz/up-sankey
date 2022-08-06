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
import type { ErrorObjectSource } from './ErrorObjectSource';
import {
    ErrorObjectSourceFromJSON,
    ErrorObjectSourceFromJSONTyped,
    ErrorObjectSourceToJSON,
} from './ErrorObjectSource';

/**
 * Provides information about an error processing a request.
 * @export
 * @interface ErrorObject
 */
export interface ErrorObject {
    /**
     * The HTTP status code associated with this error. This can also be
     * obtained from the response headers. The status indicates the broad type
     * of error according to HTTP semantics.
     * @type {string}
     * @memberof ErrorObject
     */
    status: string;
    /**
     * A short description of this error. This should be stable across
     * multiple occurrences of this type of error and typically expands on the
     * reason for the status code.
     * @type {string}
     * @memberof ErrorObject
     */
    title: string;
    /**
     * A detailed description of this error. This should be considered unique
     * to individual occurrences of an error and subject to change. It is
     * useful for debugging purposes.
     * @type {string}
     * @memberof ErrorObject
     */
    detail: string;
    /**
     * 
     * @type {ErrorObjectSource}
     * @memberof ErrorObject
     */
    source?: ErrorObjectSource;
}

/**
 * Check if a given object implements the ErrorObject interface.
 */
export function instanceOfErrorObject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "detail" in value;

    return isInstance;
}

export function ErrorObjectFromJSON(json: any): ErrorObject {
    return ErrorObjectFromJSONTyped(json, false);
}

export function ErrorObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'title': json['title'],
        'detail': json['detail'],
        'source': !exists(json, 'source') ? undefined : ErrorObjectSourceFromJSON(json['source']),
    };
}

export function ErrorObjectToJSON(value?: ErrorObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'title': value.title,
        'detail': value.detail,
        'source': ErrorObjectSourceToJSON(value.source),
    };
}
