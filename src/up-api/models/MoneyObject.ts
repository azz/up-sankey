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
 * Provides information about a value of money.
 * @export
 * @interface MoneyObject
 */
export interface MoneyObject {
    /**
     * The ISO 4217 currency code.
     * @type {string}
     * @memberof MoneyObject
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     * @type {string}
     * @memberof MoneyObject
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     * @type {number}
     * @memberof MoneyObject
     */
    valueInBaseUnits: number;
}

/**
 * Check if a given object implements the MoneyObject interface.
 */
export function instanceOfMoneyObject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currencyCode" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "valueInBaseUnits" in value;

    return isInstance;
}

export function MoneyObjectFromJSON(json: any): MoneyObject {
    return MoneyObjectFromJSONTyped(json, false);
}

export function MoneyObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): MoneyObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': json['currencyCode'],
        'value': json['value'],
        'valueInBaseUnits': json['valueInBaseUnits'],
    };
}

export function MoneyObjectToJSON(value?: MoneyObject | null): any {
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
