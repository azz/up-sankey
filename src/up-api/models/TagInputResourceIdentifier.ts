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
 * Uniquely identifies a single tag in the API.
 * @export
 * @interface TagInputResourceIdentifier
 */
export interface TagInputResourceIdentifier {
    /**
     * The type of this resource: `tags`
     * @type {string}
     * @memberof TagInputResourceIdentifier
     */
    type: string;
    /**
     * The label of the tag, which also acts as the tag’s unique identifier.
     * @type {string}
     * @memberof TagInputResourceIdentifier
     */
    id: string;
}

/**
 * Check if a given object implements the TagInputResourceIdentifier interface.
 */
export function instanceOfTagInputResourceIdentifier(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function TagInputResourceIdentifierFromJSON(json: any): TagInputResourceIdentifier {
    return TagInputResourceIdentifierFromJSONTyped(json, false);
}

export function TagInputResourceIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagInputResourceIdentifier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function TagInputResourceIdentifierToJSON(value?: TagInputResourceIdentifier | null): any {
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

