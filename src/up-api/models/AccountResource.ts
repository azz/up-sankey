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
import type { AccountResourceAttributes } from './AccountResourceAttributes';
import {
    AccountResourceAttributesFromJSON,
    AccountResourceAttributesFromJSONTyped,
    AccountResourceAttributesToJSON,
} from './AccountResourceAttributes';
import type { AccountResourceLinks } from './AccountResourceLinks';
import {
    AccountResourceLinksFromJSON,
    AccountResourceLinksFromJSONTyped,
    AccountResourceLinksToJSON,
} from './AccountResourceLinks';
import type { AccountResourceRelationships } from './AccountResourceRelationships';
import {
    AccountResourceRelationshipsFromJSON,
    AccountResourceRelationshipsFromJSONTyped,
    AccountResourceRelationshipsToJSON,
} from './AccountResourceRelationships';

/**
 * Provides information about an Up bank account.
 * @export
 * @interface AccountResource
 */
export interface AccountResource {
    /**
     * The type of this resource: `accounts`
     * @type {string}
     * @memberof AccountResource
     */
    type: string;
    /**
     * The unique identifier for this account.
     * @type {string}
     * @memberof AccountResource
     */
    id: string;
    /**
     * 
     * @type {AccountResourceAttributes}
     * @memberof AccountResource
     */
    attributes: AccountResourceAttributes;
    /**
     * 
     * @type {AccountResourceRelationships}
     * @memberof AccountResource
     */
    relationships: AccountResourceRelationships;
    /**
     * 
     * @type {AccountResourceLinks}
     * @memberof AccountResource
     */
    links?: AccountResourceLinks;
}

/**
 * Check if a given object implements the AccountResource interface.
 */
export function instanceOfAccountResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "attributes" in value;
    isInstance = isInstance && "relationships" in value;

    return isInstance;
}

export function AccountResourceFromJSON(json: any): AccountResource {
    return AccountResourceFromJSONTyped(json, false);
}

export function AccountResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'attributes': AccountResourceAttributesFromJSON(json['attributes']),
        'relationships': AccountResourceRelationshipsFromJSON(json['relationships']),
        'links': !exists(json, 'links') ? undefined : AccountResourceLinksFromJSON(json['links']),
    };
}

export function AccountResourceToJSON(value?: AccountResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'attributes': AccountResourceAttributesToJSON(value.attributes),
        'relationships': AccountResourceRelationshipsToJSON(value.relationships),
        'links': AccountResourceLinksToJSON(value.links),
    };
}

