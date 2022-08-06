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
import type { AccountResourceAttributesBalance } from './AccountResourceAttributesBalance';
import {
    AccountResourceAttributesBalanceFromJSON,
    AccountResourceAttributesBalanceFromJSONTyped,
    AccountResourceAttributesBalanceToJSON,
} from './AccountResourceAttributesBalance';
import type { AccountTypeEnum } from './AccountTypeEnum';
import {
    AccountTypeEnumFromJSON,
    AccountTypeEnumFromJSONTyped,
    AccountTypeEnumToJSON,
} from './AccountTypeEnum';
import type { OwnershipTypeEnum } from './OwnershipTypeEnum';
import {
    OwnershipTypeEnumFromJSON,
    OwnershipTypeEnumFromJSONTyped,
    OwnershipTypeEnumToJSON,
} from './OwnershipTypeEnum';

/**
 * 
 * @export
 * @interface AccountResourceAttributes
 */
export interface AccountResourceAttributes {
    /**
     * The name associated with the account in the Up application.
     * @type {string}
     * @memberof AccountResourceAttributes
     */
    displayName: string;
    /**
     * The bank account type of this account.
     * @type {AccountTypeEnum}
     * @memberof AccountResourceAttributes
     */
    accountType: AccountTypeEnum | null;
    /**
     * The ownership structure for this account.
     * @type {OwnershipTypeEnum}
     * @memberof AccountResourceAttributes
     */
    ownershipType: OwnershipTypeEnum | null;
    /**
     * 
     * @type {AccountResourceAttributesBalance}
     * @memberof AccountResourceAttributes
     */
    balance: AccountResourceAttributesBalance;
    /**
     * The date-time at which this account was first opened.
     * @type {Date}
     * @memberof AccountResourceAttributes
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the AccountResourceAttributes interface.
 */
export function instanceOfAccountResourceAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "accountType" in value;
    isInstance = isInstance && "ownershipType" in value;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function AccountResourceAttributesFromJSON(json: any): AccountResourceAttributes {
    return AccountResourceAttributesFromJSONTyped(json, false);
}

export function AccountResourceAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResourceAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': json['displayName'],
        'accountType': AccountTypeEnumFromJSON(json['accountType']),
        'ownershipType': OwnershipTypeEnumFromJSON(json['ownershipType']),
        'balance': AccountResourceAttributesBalanceFromJSON(json['balance']),
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function AccountResourceAttributesToJSON(value?: AccountResourceAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'displayName': value.displayName,
        'accountType': AccountTypeEnumToJSON(value.accountType),
        'ownershipType': OwnershipTypeEnumToJSON(value.ownershipType),
        'balance': AccountResourceAttributesBalanceToJSON(value.balance),
        'createdAt': (value.createdAt.toISOString()),
    };
}
