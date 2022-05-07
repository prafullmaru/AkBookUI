import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, Observer, map, tap } from "../rxjs-exports";

import { ApiHandlerOptions, methodType, ApiError, ApiSubscription, CacheItem } from "./model";
import { catchError } from "rxjs/operators";
import { areEqual } from "./areEqual";
import { clone } from "lodash";

@Injectable()
export class WebApiHandlerService {

    private apiErrors: ApiError[] = [];
    private cacheItems: CacheItem[] = [];
    private apiSubscriptions: ApiSubscription[] = [];
    private apiRootPath: string = "http://localhost:9000/akbook/";

    constructor(
        private http: HttpClient
    ) {

    }

    get<T>(url: string, options?: ApiHandlerOptions): Observable<T> {
        options = options || {};

        const fullurl = `${this.apiRootPath}${url}`;
        return this.executeRequest(methodType.get, fullurl, options);

        // if (!options.cache) {
        //     return this.executeRequest(methodType.get, fullurl, options);
        // }
        
        // const index = this.getCacheItemIndex(this.cacheItems, url, options.params);
        // const cacheItem = index > -1 ? this.cacheItems[index] : null;

        // //if(cacheItem && !this.isCacheExpired(cacheItem.absoluteExpiration, cacheItem.lastFetchedTime))
        // if(cacheItem && !this.isCacheExpired(cacheItem.absoluteExpiration, new Date())) {
        //     return cacheItem.result.pipe(
        //         map(result => clone(result)
        //         )
        //     );
        // }
    }

    getEndpoint(url: string, options: ApiHandlerOptions): string {

        return `${this.apiRootPath}${url}`;
    }

    private executeRequest(type: string, url: string, options?: any, data?: any) {
        let headers = new HttpHeaders();
        if (options && options.isSilent) {
            headers = headers.set("isSilent", "true");
        }

        return Observable.create((observer: Observer<any>) => {
            const subscription = this.http.request(type, url, {
                body: data,
                ...options,
                headers
            })
                .pipe(catchError(response => this.handleError(response)))
                .subscribe(
                    result => observer.next(result),
                    error => observer.error(error),
                    () => observer.complete()
                );

            this.apiSubscriptions.push({
                url,
                params: options && options.params,
                subscription
            });
        });
    }

    private handleError(response: any): Observable<ApiError> {
        const message = (response.error && response.error.DetailedInformation)
            || (response.error && response.error.Message)
            || (typeof response.error === 'string' && response.error)
            || 'System Error Occurred';
        //|| (response.error instanceof ArrayBuffer && String.fromCharCode.apply(null, new Int8Array(response.error)))

        const error: ApiError = {
            status: response.status
            , message
            , timestamp: new Date()
        };

        if (this.apiErrors.length > 50) {
            this.apiErrors.shift();
        }

        this.apiErrors.unshift(error);
        return throwError(error);
    }

    private getCacheItemIndex(cacheItem: CacheItem[], url: string, params: any) : number {
        return cacheItem.findIndex(item => areEqual(item.url, url) && areEqual(item.params, params));
    }

    private isCacheExpired(expiration: number | undefined, lastFetchedTime: Date): boolean {
        if(typeof expiration === 'undefined') {
            return false;
        }

        const expTime = new Date(lastFetchedTime);
        expTime.setMinutes(expTime.getMinutes() + expiration);
        return new Date() > expTime;
    }
}