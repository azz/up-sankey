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
import type { MoneyObject } from './MoneyObject';
import {
    MoneyObjectFromJSON,
    MoneyObjectFromJSONTyped,
    MoneyObjectToJSON,
} from './MoneyObject';

/**
 * The total amount of this Round Up, including any boosts, represented as
 * a negative value.
 * @export
 * @interface RoundUpObjectAmount
 */
export interface RoundUpObjectAmount {
    /**
     * The ISO 4217 currency code.
     * @type {string}
     * @memberof RoundUpObjectAmount
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     * @type {string}
     * @memberof RoundUpObjectAmount
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     * @type {number}
     * @memberof RoundUpObjectAmount
     */
    valueInBaseUnits: number;
}

/**
 * Check if a given object implements the RoundUpObjectAmount interface.
 */
export function instanceOfRoundUpObjectAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currencyCode" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "valueInBaseUnits" in value;

    return isInstance;
}

export function RoundUpObjectAmountFromJSON(json: any): RoundUpObjectAmount {
    return RoundUpObjectAmountFromJSONTyped(json, false);
}

export function RoundUpObjectAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoundUpObjectAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': json['currencyCode'],
        'value': json['value'],
        'valueInBaseUnits': json['valueInBaseUnits'],
    };
}

export function RoundUpObjectAmountToJSON(value?: RoundUpObjectAmount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currencyCode': value.currencyCode,
        'value': value.value,
        'valueInBaseUnits': value.valueInBaseUnits,
    };
}

