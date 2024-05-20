import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRequestOptions, getApiRequestOptions, getUrlWithoutSlash } from './api.util';

/**
 * API config
 * @publicApi
 */
export interface ApiConfig {
  /**
   * API host
   */
  readonly host: string;
}

/**
 * Service for http requests.
 * @publicApi
 *
 * @usageNotes
 * ### Example
 *
 * This service is a facade for HttpClient. You can use ApiService as HttpClient.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly config: ApiConfig = { host: 'https://www.travelpayouts.com' };

  /**
   * Return full url with API host
   *
   * @param url Request url
   */
  makeUrl(url: string): string {
    const apiHost = url.indexOf('http') === 0 ? '' : getUrlWithoutSlash(this.config.host);

    return `${apiHost}${url}`;
  }

  /**
   * Create GET request
   *
   * @param url Request url
   * @param options Request options
   */
  get<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.get<T>(this.makeUrl(url), getApiRequestOptions(options));
  }

  /**
   * Create POST request
   *
   * @param url Request url
   * @param body Request body
   * @param options Request options
   */
  post<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.post<T>(this.makeUrl(url), body ?? null, getApiRequestOptions(options));
  }

  /**
   * Create PATCH request
   *
   * @param url Request url
   * @param body Request body
   * @param options Request options
   */
  patch<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.patch<T>(this.makeUrl(url), body, getApiRequestOptions(options));
  }

  /**
   * Create PUT request
   *
   * @param url Request url
   * @param body Request body
   * @param options Request options
   */
  put<T = void>(url: string, body: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.put<T>(this.makeUrl(url), body, getApiRequestOptions(options));
  }

  /**
   * Create DELETE request
   *
   * @param url Request url
   * @param options Request options
   */
  delete<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.delete<T>(this.makeUrl(url), getApiRequestOptions(options));
  }
}
