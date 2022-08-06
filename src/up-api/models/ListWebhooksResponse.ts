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
import type { ListAccountsResponseLinks } from './ListAccountsResponseLinks';
import {
    ListAccountsResponseLinksFromJSON,
    ListAccountsResponseLinksFromJSONTyped,
    ListAccountsResponseLinksToJSON,
} from './ListAccountsResponseLinks';
import type { WebhookResource } from './WebhookResource';
import {
    WebhookResourceFromJSON,
    WebhookResourceFromJSONTyped,
    WebhookResourceToJSON,
} from './WebhookResource';

/**
 * Successful response to get all webhooks. This returns a paginated list of
 * webhooks, which can be scrolled by following the `prev` and `next` links
 * if present.
 * @export
 * @interface ListWebhooksResponse
 */
export interface ListWebhooksResponse {
    /**
     * The list of webhooks returned in this response.
     * @type {Array<WebhookResource>}
     * @memberof ListWebhooksResponse
     */
    data: Array<WebhookResource>;
    /**
     * 
     * @type {ListAccountsResponseLinks}
     * @memberof ListWebhooksResponse
     */
    links: ListAccountsResponseLinks;
}

/**
 * Check if a given object implements the ListWebhooksResponse interface.
 */
export function instanceOfListWebhooksResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function ListWebhooksResponseFromJSON(json: any): ListWebhooksResponse {
    return ListWebhooksResponseFromJSONTyped(json, false);
}

export function ListWebhooksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListWebhooksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(WebhookResourceFromJSON)),
        'links': ListAccountsResponseLinksFromJSON(json['links']),
    };
}

export function ListWebhooksResponseToJSON(value?: ListWebhooksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(WebhookResourceToJSON)),
        'links': ListAccountsResponseLinksToJSON(value.links),
    };
}

