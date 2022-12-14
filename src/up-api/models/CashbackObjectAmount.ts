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
 * The total amount of cashback paid, represented as a positive value.
 * @export
 * @interface CashbackObjectAmount
 */
export interface CashbackObjectAmount {
    /**
     * The ISO 4217 currency code.
     * @type {string}
     * @memberof CashbackObjectAmount
     */
    currencyCode: string;
    /**
     * The amount of money, formatted as a string in the relevant currency.
     * For example, for an Australian dollar value of $10.56, this field will
     * be `"10.56"`. The currency symbol is not included in the string.
     * @type {string}
     * @memberof CashbackObjectAmount
     */
    value: string;
    /**
     * The amount of money in the smallest denomination for the currency, as a
     * 64-bit integer.  For example, for an Australian dollar value of $10.56,
     * this field will be `1056`.
     * @type {number}
     * @memberof CashbackObjectAmount
     */
    valueInBaseUnits: number;
}

/**
 * Check if a given object implements the CashbackObjectAmount interface.
 */
export function instanceOfCashbackObjectAmount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currencyCode" in value;
    isInstance = isInstance && "value" in value;
    isInstance = isInstance && "valueInBaseUnits" in value;

    return isInstance;
}

export function CashbackObjectAmountFromJSON(json: any): CashbackObjectAmount {
    return CashbackObjectAmountFromJSONTyped(json, false);
}

export function CashbackObjectAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashbackObjectAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currencyCode': json['currencyCode'],
        'value': json['value'],
        'valueInBaseUnits': json['valueInBaseUnits'],
    };
}

export function CashbackObjectAmountToJSON(value?: CashbackObjectAmount | null): any {
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

