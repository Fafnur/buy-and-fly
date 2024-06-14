import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, TransferState } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  SearchDestination,
  SearchFlight,
  SearchFlightOptions,
  SearchFlightResponse,
  SearchHotelsOptions,
  SearchType,
} from '@baf/search/common';
import { ENV_DEFAULT, ENV_KEY, Environment } from '@baf/core';

export function getSearchFlightOptions(
  queryParams: Record<string, string | boolean | number | undefined>,
  token: string,
  currency: string,
): SearchFlightOptions {
  const { from, to, direct, startDate, endDate } = queryParams;

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
    departure_at: '',
    return_at: '',
    token,
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
      .get<SearchDestination[]>(`/autocomplete/places2?locale=ru${types?.map((type) => `types[]=${type}`).join('&')}&term=${term}`)
      .pipe(
        map((result) =>
          result.map((item) => ({
            ...item,
            value: item.code,
          })),
        ),
      );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getResults(type: SearchType, queryParams: any): Observable<any> {
    switch (type) {
      case SearchType.Avia:
        return this.findFlight(getSearchFlightOptions(queryParams, this.environment.aviasalesToken, this.currency));
      case SearchType.Hotel:
        return this.findHotels(queryParams);
      case SearchType.Tour:
        return this.findTours(queryParams);
      case SearchType.Railway:
        return this.findRailways(queryParams);
    }
  }

  findFlight(options: SearchFlightOptions): Observable<SearchFlight[]> {
    return this.httpClient
      .get<SearchFlightResponse>(
        '/api/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&departure_at=2023-07&return_at=2023-08&sorting=price&direct=false&currency=rub&token=',
      )
      .pipe(map(({ data }) => data));
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
