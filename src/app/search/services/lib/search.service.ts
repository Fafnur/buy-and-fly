import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, LOCALE_ID, TransferState } from '@angular/core';
import { map, Observable } from 'rxjs';

import { castParams, castQueryParams, ENV_DEFAULT, ENV_KEY, Environment, HttpParams } from '@baf/core';
import { SearchDestination, SearchFlight, SearchFlightOptions, SearchFlightResponse } from '@baf/search/common';

export function getSearchFlightOptions(queryParams: Record<string, unknown>, token: string, currency: string): SearchFlightOptions {
  const { from, to, direct, startDate, endDate } = castQueryParams(queryParams);

  if (
    typeof from !== 'string' ||
    typeof to !== 'string' ||
    (typeof direct !== 'boolean' && typeof direct !== 'undefined') ||
    typeof startDate !== 'string' ||
    (typeof endDate !== 'string' && typeof endDate !== 'undefined')
  ) {
    throw new Error('Invalid search flight options');
  }

  return {
    origin: from,
    destination: to,
    direct,
    currency: currency.toLowerCase(),
    departure_at: startDate,
    return_at: endDate,
    token,
    sorting: 'price',
  };
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(TransferState).get<Environment>(ENV_KEY, ENV_DEFAULT);
  private readonly currency = inject(DEFAULT_CURRENCY_CODE);
  private readonly localeId = inject(LOCALE_ID);

  findDestination(term: string, types?: string[]): Observable<SearchDestination[]> {
    const withTypes = types?.length ? `&${types.map((type) => `types[]=${type}`).join('&')}` : '';

    return this.httpClient.get<SearchDestination[]>(`/api/autocomplete/places2?locale=${this.localeId}${withTypes}&term=${term}`).pipe(
      map((result) =>
        result.map((item) => ({
          ...item,
          value: item.code,
        })),
      ),
    );
  }

  findFlights(queryParams: Record<string, unknown>): Observable<SearchFlight[]> {
    const params = castParams(getSearchFlightOptions(queryParams, this.environment.aviasalesToken, this.currency));

    return this.httpClient.get<SearchFlightResponse>('/api/aviasales/v3/prices_for_dates', { params }).pipe(map(({ data }) => data));
  }

  /**
   * TODO: Adding implementation
   */
  findHotels(options: unknown): Observable<unknown> {
    return this.httpClient.get('/api', { params: options as HttpParams });
  }

  /**
   * TODO: Adding implementation
   */
  findTours(options: unknown): Observable<unknown> {
    return this.httpClient.get('/api', { params: options as HttpParams });
  }

  /**
   * TODO: Adding implementation
   */
  findRailways(options: unknown): Observable<unknown> {
    return this.httpClient.get('/api', { params: options as HttpParams });
  }
}
