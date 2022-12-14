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


import * as runtime from '../runtime';
import type {
  CreateWebhookRequest,
  CreateWebhookResponse,
  GetWebhookResponse,
  ListWebhookDeliveryLogsResponse,
  ListWebhooksResponse,
  WebhookEventCallback,
} from '../models';
import {
    CreateWebhookRequestFromJSON,
    CreateWebhookRequestToJSON,
    CreateWebhookResponseFromJSON,
    CreateWebhookResponseToJSON,
    GetWebhookResponseFromJSON,
    GetWebhookResponseToJSON,
    ListWebhookDeliveryLogsResponseFromJSON,
    ListWebhookDeliveryLogsResponseToJSON,
    ListWebhooksResponseFromJSON,
    ListWebhooksResponseToJSON,
    WebhookEventCallbackFromJSON,
    WebhookEventCallbackToJSON,
} from '../models';

export interface WebhooksGetRequest {
    pageSize?: number;
}

export interface WebhooksIdDeleteRequest {
    id: string;
}

export interface WebhooksIdGetRequest {
    id: string;
}

export interface WebhooksPostRequest {
    createWebhookRequest?: CreateWebhookRequest;
}

export interface WebhooksWebhookIdLogsGetRequest {
    webhookId: string;
    pageSize?: number;
}

export interface WebhooksWebhookIdPingPostRequest {
    webhookId: string;
}

/**
 * 
 */
export class WebhooksApi extends runtime.BaseAPI {

    /**
     * Retrieve a list of configured webhooks. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. Results are ordered oldest first to newest last. 
     * List webhooks
     */
    async webhooksGetRaw(requestParameters: WebhooksGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWebhooksResponse>> {
        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWebhooksResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of configured webhooks. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. Results are ordered oldest first to newest last. 
     * List webhooks
     */
    async webhooksGet(requestParameters: WebhooksGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWebhooksResponse> {
        const response = await this.webhooksGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific webhook by providing its unique identifier. Once deleted, webhook events will no longer be sent to the configured URL. 
     * Delete webhook
     */
    async webhooksIdDeleteRaw(requestParameters: WebhooksIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhooksIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific webhook by providing its unique identifier. Once deleted, webhook events will no longer be sent to the configured URL. 
     * Delete webhook
     */
    async webhooksIdDelete(requestParameters: WebhooksIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.webhooksIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Retrieve a specific webhook by providing its unique identifier. 
     * Retrieve webhook
     */
    async webhooksIdGetRaw(requestParameters: WebhooksIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWebhookResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling webhooksIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetWebhookResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a specific webhook by providing its unique identifier. 
     * Retrieve webhook
     */
    async webhooksIdGet(requestParameters: WebhooksIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWebhookResponse> {
        const response = await this.webhooksIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new webhook with a given URL. The URL will receive webhook events as JSON-encoded `POST` requests. The URL must respond with a HTTP `200` status on success.  There is currently a limit of 10 webhooks at any given time. Once this limit is reached, existing webhooks will need to be deleted before new webhooks can be created.  Event delivery is retried with exponential backoff if the URL is unreachable or it does not respond with a `200` status. The response includes a `secretKey` attribute, which is used to sign requests sent to the webhook URL. It will not be returned from any other endpoints within the Up API. If the `secretKey` is lost, simply create a new webhook with the same URL, capture its `secretKey` and then delete the original webhook. See [Handling webhook events](#callback_post_webhookURL) for details on how to process webhook events.  It is probably a good idea to test the webhook by [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating it. 
     * Create webhook
     */
    async webhooksPostRaw(requestParameters: WebhooksPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateWebhookResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWebhookRequestToJSON(requestParameters.createWebhookRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateWebhookResponseFromJSON(jsonValue));
    }

    /**
     * Create a new webhook with a given URL. The URL will receive webhook events as JSON-encoded `POST` requests. The URL must respond with a HTTP `200` status on success.  There is currently a limit of 10 webhooks at any given time. Once this limit is reached, existing webhooks will need to be deleted before new webhooks can be created.  Event delivery is retried with exponential backoff if the URL is unreachable or it does not respond with a `200` status. The response includes a `secretKey` attribute, which is used to sign requests sent to the webhook URL. It will not be returned from any other endpoints within the Up API. If the `secretKey` is lost, simply create a new webhook with the same URL, capture its `secretKey` and then delete the original webhook. See [Handling webhook events](#callback_post_webhookURL) for details on how to process webhook events.  It is probably a good idea to test the webhook by [sending it a `PING` event](#post_webhooks_webhookId_ping) after creating it. 
     * Create webhook
     */
    async webhooksPost(requestParameters: WebhooksPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateWebhookResponse> {
        const response = await this.webhooksPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of delivery logs for a webhook by providing its unique identifier. This is useful for analysis and debugging purposes. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. Results are ordered newest first to oldest last. Logs may be automatically purged after a period of time. 
     * List webhook logs
     */
    async webhooksWebhookIdLogsGetRaw(requestParameters: WebhooksWebhookIdLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWebhookDeliveryLogsResponse>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling webhooksWebhookIdLogsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks/{webhookId}/logs`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWebhookDeliveryLogsResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve a list of delivery logs for a webhook by providing its unique identifier. This is useful for analysis and debugging purposes. The returned list is [paginated](#pagination) and can be scrolled by following the `next` and `prev` links where present. Results are ordered newest first to oldest last. Logs may be automatically purged after a period of time. 
     * List webhook logs
     */
    async webhooksWebhookIdLogsGet(requestParameters: WebhooksWebhookIdLogsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWebhookDeliveryLogsResponse> {
        const response = await this.webhooksWebhookIdLogsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send a `PING` event to a webhook by providing its unique identifier. This is useful for testing and debugging purposes. The event is delivered asynchronously and its data is returned in the response to this request. 
     * Ping webhook
     */
    async webhooksWebhookIdPingPostRaw(requestParameters: WebhooksWebhookIdPingPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WebhookEventCallback>> {
        if (requestParameters.webhookId === null || requestParameters.webhookId === undefined) {
            throw new runtime.RequiredError('webhookId','Required parameter requestParameters.webhookId was null or undefined when calling webhooksWebhookIdPingPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_auth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/webhooks/{webhookId}/ping`.replace(`{${"webhookId"}}`, encodeURIComponent(String(requestParameters.webhookId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WebhookEventCallbackFromJSON(jsonValue));
    }

    /**
     * Send a `PING` event to a webhook by providing its unique identifier. This is useful for testing and debugging purposes. The event is delivered asynchronously and its data is returned in the response to this request. 
     * Ping webhook
     */
    async webhooksWebhookIdPingPost(requestParameters: WebhooksWebhookIdPingPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WebhookEventCallback> {
        const response = await this.webhooksWebhookIdPingPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
