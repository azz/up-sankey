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
import type { TransactionResourceAttributes } from './TransactionResourceAttributes';
import {
    TransactionResourceAttributesFromJSON,
    TransactionResourceAttributesFromJSONTyped,
    TransactionResourceAttributesToJSON,
} from './TransactionResourceAttributes';
import type { TransactionResourceRelationships } from './TransactionResourceRelationships';
import {
    TransactionResourceRelationshipsFromJSON,
    TransactionResourceRelationshipsFromJSONTyped,
    TransactionResourceRelationshipsToJSON,
} from './TransactionResourceRelationships';

/**
 * 
 * @export
 * @interface TransactionResource
 */
export interface TransactionResource {
    /**
     * The type of this resource: `transactions`
     * @type {string}
     * @memberof TransactionResource
     */
    type: string;
    /**
     * The unique identifier for this transaction.
     * @type {string}
     * @memberof TransactionResource
     */
    id: string;
    /**
     * 
     * @type {TransactionResourceAttributes}
     * @memberof TransactionResource
     */
    attributes: TransactionResourceAttributes;
    /**
     * 
     * @type {TransactionResourceRelationships}
     * @memberof TransactionResource
     */
    relationships: TransactionResourceRelationships;
    /**
     * 
     * @type {AccountResourceLinks}
     * @memberof TransactionResource
     */
    links?: AccountResourceLinks;
}

/**
 * Check if a given object implements the TransactionResource interface.
 */
export function instanceOfTransactionResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function TransactionResourceFromJSON(json: any): TransactionResource {
    return TransactionResourceFromJSONTyped(json, false);
}

export function TransactionResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': TransactionResourceAttributesFromJSON(json['attributes']),
        'relationships': TransactionResourceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : AccountResourceLinksFromJSON(json['links']),
    };
}

export function TransactionResourceToJSON(value?: TransactionResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': TransactionResourceAttributesToJSON(value.attributes),
        'relationships': TransactionResourceRelationshipsToJSON(value.relationships),
        'links': AccountResourceLinksToJSON(value.links),
    };
}

