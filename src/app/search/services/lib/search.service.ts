import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SearchDestination, SearchFlightOptions, SearchHotelsOptions, SearchType } from '@baf/search/common';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly httpClient = inject(HttpClient);

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
        return this.findFlight(queryParams);
      case SearchType.Hotel:
        return this.findHotels(queryParams);
      case SearchType.Tour:
        return this.findTours(queryParams);
      case SearchType.Railway:
        return this.findRailways(queryParams);
    }
  }

  findFlight(options: SearchFlightOptions): Observable<any> {
    return this.httpClient.get(
      '/api/aviasales/v3/prices_for_dates?origin=MOW&destination=DXB&departure_at=2023-07&return_at=2023-08&sorting=price&direct=false&currency=rub&token=',
    );
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
