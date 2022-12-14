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
 * 
 * @export
 * @interface CategoryResourceRelationshipsChildrenDataInner
 */
export interface CategoryResourceRelationshipsChildrenDataInner {
    /**
     * The type of this resource: `categories`
     * @type {string}
     * @memberof CategoryResourceRelationshipsChildrenDataInner
     */
    type: string;
    /**
     * The unique identifier of the resource within its type.
     * @type {string}
     * @memberof CategoryResourceRelationshipsChildrenDataInner
     */
    id: string;
}

/**
 * Check if a given object implements the CategoryResourceRelationshipsChildrenDataInner interface.
 */
export function instanceOfCategoryResourceRelationshipsChildrenDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function CategoryResourceRelationshipsChildrenDataInnerFromJSON(json: any): CategoryResourceRelationshipsChildrenDataInner {
    return CategoryResourceRelationshipsChildrenDataInnerFromJSONTyped(json, false);
}

export function CategoryResourceRelationshipsChildrenDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResourceRelationshipsChildrenDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function CategoryResourceRelationshipsChildrenDataInnerToJSON(value?: CategoryResourceRelationshipsChildrenDataInner | null): any {
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

