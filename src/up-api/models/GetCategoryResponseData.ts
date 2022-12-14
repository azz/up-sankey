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
import type { AccountResourceLinks } from './AccountResourceLinks';
import {
    AccountResourceLinksFromJSON,
    AccountResourceLinksFromJSONTyped,
    AccountResourceLinksToJSON,
} from './AccountResourceLinks';
import type { CategoryResource } from './CategoryResource';
import {
    CategoryResourceFromJSON,
    CategoryResourceFromJSONTyped,
    CategoryResourceToJSON,
} from './CategoryResource';
import type { CategoryResourceAttributes } from './CategoryResourceAttributes';
import {
    CategoryResourceAttributesFromJSON,
    CategoryResourceAttributesFromJSONTyped,
    CategoryResourceAttributesToJSON,
} from './CategoryResourceAttributes';
import type { CategoryResourceRelationships } from './CategoryResourceRelationships';
import {
    CategoryResourceRelationshipsFromJSON,
    CategoryResourceRelationshipsFromJSONTyped,
    CategoryResourceRelationshipsToJSON,
} from './CategoryResourceRelationships';

/**
 * The category returned in this response.
 * @export
 * @interface GetCategoryResponseData
 */
export interface GetCategoryResponseData {
    /**
     * The type of this resource: `categories`
     * @type {string}
     * @memberof GetCategoryResponseData
     */
    type: string;
    /**
     * The unique identifier for this category. This is a human-readable but
     * URL-safe value.
     * @type {string}
     * @memberof GetCategoryResponseData
     */
    id: string;
    /**
     * 
     * @type {CategoryResourceAttributes}
     * @memberof GetCategoryResponseData
     */
    attributes: CategoryResourceAttributes;
    /**
     * 
     * @type {CategoryResourceRelationships}
     * @memberof GetCategoryResponseData
     */
    relationships: CategoryResourceRelationships;
    /**
     * 
     * @type {AccountResourceLinks}
     * @memberof GetCategoryResponseData
     */
    links?: AccountResourceLinks;
}

/**
 * Check if a given object implements the GetCategoryResponseData interface.
 */
export function instanceOfGetCategoryResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function GetCategoryResponseDataFromJSON(json: any): GetCategoryResponseData {
    return GetCategoryResponseDataFromJSONTyped(json, false);
}

export function GetCategoryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCategoryResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': CategoryResourceAttributesFromJSON(json['attributes']),
        'relationships': CategoryResourceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : AccountResourceLinksFromJSON(json['links']),
    };
}

export function GetCategoryResponseDataToJSON(value?: GetCategoryResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': CategoryResourceAttributesToJSON(value.attributes),
        'relationships': CategoryResourceRelationshipsToJSON(value.relationships),
        'links': AccountResourceLinksToJSON(value.links),
    };
}

