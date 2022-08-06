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
import type { CashbackObjectAmount } from './CashbackObjectAmount';
import {
    CashbackObjectAmountFromJSON,
    CashbackObjectAmountFromJSONTyped,
    CashbackObjectAmountToJSON,
} from './CashbackObjectAmount';

/**
 * Provides information about an instant reimbursement in the form of
 * cashback.
 * @export
 * @interface CashbackObject
 */
export interface CashbackObject {
    /**
     * A brief description of why this cashback was paid.
     * @type {string}
     * @memberof CashbackObject
     */
    description: string;
    /**
     * 
     * @type {CashbackObjectAmount}
     * @memberof CashbackObject
     */
    amount: CashbackObjectAmount;
}

/**
 * Check if a given object implements the CashbackObject interface.
 */
export function instanceOfCashbackObject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function CashbackObjectFromJSON(json: any): CashbackObject {
    return CashbackObjectFromJSONTyped(json, false);
}

export function CashbackObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashbackObject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'amount': CashbackObjectAmountFromJSON(json['amount']),
    };
}

export function CashbackObjectToJSON(value?: CashbackObject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'amount': CashbackObjectAmountToJSON(value.amount),
    };
}
