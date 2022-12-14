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
import type { CategoryResourceRelationshipsParentData } from './CategoryResourceRelationshipsParentData';
import {
    CategoryResourceRelationshipsParentDataFromJSON,
    CategoryResourceRelationshipsParentDataFromJSONTyped,
    CategoryResourceRelationshipsParentDataToJSON,
} from './CategoryResourceRelationshipsParentData';
import type { TransactionResourceRelationshipsCategoryLinks } from './TransactionResourceRelationshipsCategoryLinks';
import {
    TransactionResourceRelationshipsCategoryLinksFromJSON,
    TransactionResourceRelationshipsCategoryLinksFromJSONTyped,
    TransactionResourceRelationshipsCategoryLinksToJSON,
} from './TransactionResourceRelationshipsCategoryLinks';

/**
 * 
 * @export
 * @interface TransactionResourceRelationshipsCategory
 */
export interface TransactionResourceRelationshipsCategory {
    /**
     * 
     * @type {CategoryResourceRelationshipsParentData}
     * @memberof TransactionResourceRelationshipsCategory
     */
    data: CategoryResourceRelationshipsParentData | null;
    /**
     * 
     * @type {TransactionResourceRelationshipsCategoryLinks}
     * @memberof TransactionResourceRelationshipsCategory
     */
    links?: TransactionResourceRelationshipsCategoryLinks;
}

/**
 * Check if a given object implements the TransactionResourceRelationshipsCategory interface.
 */
export function instanceOfTransactionResourceRelationshipsCategory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TransactionResourceRelationshipsCategoryFromJSON(json: any): TransactionResourceRelationshipsCategory {
    return TransactionResourceRelationshipsCategoryFromJSONTyped(json, false);
}

export function TransactionResourceRelationshipsCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResourceRelationshipsCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': CategoryResourceRelationshipsParentDataFromJSON(json['data']),
        'links': !exists(json, 'links') ? undefined : TransactionResourceRelationshipsCategoryLinksFromJSON(json['links']),
    };
}

export function TransactionResourceRelationshipsCategoryToJSON(value?: TransactionResourceRelationshipsCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': CategoryResourceRelationshipsParentDataToJSON(value.data),
        'links': TransactionResourceRelationshipsCategoryLinksToJSON(value.links),
    };
}

