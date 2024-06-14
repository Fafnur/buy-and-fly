import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, TransferState } from '@angular/core';
import { map, Observable } from 'rxjs';

import { castParams, castQueryParams, ENV_DEFAULT, ENV_KEY, Environment } from '@baf/core';
import { SearchDestination, SearchFlight, SearchFlightOptions, SearchFlightResponse, SearchHotelsOptions } from '@baf/search/common';

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

  findDestination(term: string, types?: string[]): Observable<SearchDestination[]> {
    return this.httpClient
      .get<SearchDestination[]>(`/api/autocomplete/places2?locale=ru${types?.map((type) => `types[]=${type}`).join('&')}&term=${term}`)
      .pipe(
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

  findHotels(options: SearchHotelsOptions): Observable<any> {
    return this.httpClient.get('/api');
  }

  findTours(options: any): Observable<any> {
    return this.httpClient.get('/api');
  }

  findRailways(options: any): Observable<any> {
    return this.httpClient.get('/api');
  }
}
