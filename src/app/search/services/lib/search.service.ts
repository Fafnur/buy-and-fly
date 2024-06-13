import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';

import { SearchDestination, SearchType } from '@baf/search/common';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly httpClient = inject(HttpClient);

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

  getResults(type: SearchType, queryParams: Record<string, unknown>): Observable<any> {
    return EMPTY;
  }
}
