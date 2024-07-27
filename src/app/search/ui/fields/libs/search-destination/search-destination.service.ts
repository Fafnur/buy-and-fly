import { HttpClient } from '@angular/common/http';
import { inject, Injectable, LOCALE_ID } from '@angular/core';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';

import type { SearchDestination } from '@baf/search/common';

@Injectable()
export class SearchDestinationService {
  private readonly httpClient = inject(HttpClient);
  private readonly localeId = inject(LOCALE_ID);

  findDestination(term: string, key: string, types?: string[]): Observable<SearchDestination[]> {
    const withTypes = types?.length ? `&${types.map((type) => `types[]=${type}`).join('&')}` : '';

    return this.httpClient.get<SearchDestination[]>(`/api/autocomplete/places2?locale=${this.localeId}${withTypes}&term=${term}`).pipe(
      map((result) =>
        result.map((item) => ({
          ...item,
          value: item[key as 'code' | 'name'],
        })),
      ),
    );
  }
}
