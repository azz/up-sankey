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
 * @interface CategoryResourceAttributes
 */
export interface CategoryResourceAttributes {
    /**
     * The name of this category as seen in the Up application.
     * @type {string}
     * @memberof CategoryResourceAttributes
     */
    name: string;
}

/**
 * Check if a given object implements the CategoryResourceAttributes interface.
 */
export function instanceOfCategoryResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CategoryResourceAttributesFromJSON(json: any): CategoryResourceAttributes {
    return CategoryResourceAttributesFromJSONTyped(json, false);
}

export function CategoryResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function CategoryResourceAttributesToJSON(value?: CategoryResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}
