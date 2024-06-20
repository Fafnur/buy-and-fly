import { HttpClient } from '@angular/common/http';
import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { map, Observable } from 'rxjs';

import { SearchDestination } from '@baf/search/common';

@Injectable()
export class SearchDestinationService {
  private readonly httpClient = inject(HttpClient);
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
}
