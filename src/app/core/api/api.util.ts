import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Api request options
 * @publicApi
 */
export interface ApiRequestOptions {
  headers:
    | string
    | {
        [name: string]: string | string[];
      }
    | HttpHeaders;
  params: Record<string, unknown>;
  reportProgress: boolean;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  observe: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseType: any;
  withCredentials: boolean;
}

/**
 * Return mapped and sort query params
 * @publicApi
 *
 * @param options Request options
 */
export function getApiRequestOptions(options?: Partial<ApiRequestOptions>):
  | {
      headers?: HttpHeaders;
      params?: HttpParams;
      reportProgress?: boolean;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      observe?: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      responseType?: any;
      withCredentials?: boolean;
    }
  | undefined {
  if (options) {
    let params: HttpParams | undefined;
    let headers: HttpHeaders | undefined;
    if (options.headers) {
      headers = !(options.headers instanceof HttpHeaders) ? new HttpHeaders(options.headers) : options.headers;
    }
    if (options.params) {
      const httpParams = new HttpParams();

      for (const propKey of Object.keys(options.params).sort()) {
        const prop = options.params[propKey];
        if (prop !== undefined) {
          if (Array.isArray(prop)) {
            prop.forEach((item) => {
              params = httpParams.append(`${propKey}[]`, item == null ? 'NULL' : item.toString());
            });
          } else {
            params = httpParams.append(propKey, prop === null ? 'NULL' : prop.toString());
          }
        }
      }
      params = httpParams;
    }

    return { ...options, params, headers };
  }

  return;
}

/**
 * Remove last slash
 * @publicApi
 *
 * @param url Url
 */
export function getUrlWithoutSlash(url: string): string {
  if (url && url.length > 0 && url.charAt(url.length - 1) === '/') {
    return url.slice(0, url.length - 1);
  }

  return url;
}
