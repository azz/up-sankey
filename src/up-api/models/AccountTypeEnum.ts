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


/**
 * Specifies the type of bank account. Currently returned values are `SAVER`
 * and `TRANSACTIONAL`.
 * @export
 */
export const AccountTypeEnum = {
    Saver: 'SAVER',
    Transactional: 'TRANSACTIONAL'
} as const;
export type AccountTypeEnum = typeof AccountTypeEnum[keyof typeof AccountTypeEnum];


export function AccountTypeEnumFromJSON(json: any): AccountTypeEnum {
    return AccountTypeEnumFromJSONTyped(json, false);
}

export function AccountTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTypeEnum {
    return json as AccountTypeEnum;
}

export function AccountTypeEnumToJSON(value?: AccountTypeEnum | null): any {
    return value as any;
}

