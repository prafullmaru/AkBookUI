import { HttpHeaders } from "@angular/common/http";
import { Observable, Subscription } from "../rxjs-exports";

export enum EndPointType {
    Rest,
    WebSocket,
    Watson
}

export interface CacheItem {
    url?: string;
    params?: any,
    result?: Observable<any>,
    lastFetchedTime?: Date,
    absoluteExpiration?: number
}

export interface ApiSubscription {
    url?: string,
    params?: Object,
    subscription: Subscription
}

export interface ApiHandlerOptions {
    headers?: HttpHeaders | { 
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: any;
    reportProgress?: boolean;
    responseType?: 'arrayBuffer';
    withCredentials?: boolean;

    endpointType?: EndPointType;
    isSilent?: boolean;
    cache?: boolean;
    serviceName?: string;
    environmentName?: string;
    absoluteExpiration?: number;
}

export const methodType = {
    get: 'get',
    post: 'post',
    put: 'put',
    delete : 'delete'
}

export interface ApiError {
    message?: string;
    status?: string,
    timestamp?: Date
}