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
import type { ErrorObject } from './ErrorObject';
import {
    ErrorObjectFromJSON,
    ErrorObjectFromJSONTyped,
    ErrorObjectToJSON,
} from './ErrorObject';

/**
 * Generic error response that returns one or more errors.
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * The list of errors returned in this response.
     * @type {Array<ErrorObject>}
     * @memberof ErrorResponse
     */
    errors: Array<ErrorObject>;
}

/**
 * Check if a given object implements the ErrorResponse interface.
 */
export function instanceOfErrorResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "errors" in value;

    return isInstance;
}

export function ErrorResponseFromJSON(json: any): ErrorResponse {
    return ErrorResponseFromJSONTyped(json, false);
}

export function ErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errors': ((json['errors'] as Array<any>).map(ErrorObjectFromJSON)),
    };
}

export function ErrorResponseToJSON(value?: ErrorResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errors': ((value.errors as Array<any>).map(ErrorObjectToJSON)),
    };
}
