import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, LOCALE_ID, TransferState } from '@angular/core';
import { map, Observable } from 'rxjs';

import { castParams, ENV_DEFAULT, ENV_KEY, Environment } from '@baf/core';
import {
  getSearchHotelsInfoOptions,
  getSearchHotelsOptions,
  SearchHotel,
  SearchHotelInfo,
  SearchHotelsResponse,
} from '@baf/search/hotels/common';

@Injectable()
export class SearchHotelService {
  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(TransferState).get<Environment>(ENV_KEY, ENV_DEFAULT);
  private readonly localeId = inject(LOCALE_ID);
  private readonly currency = inject(DEFAULT_CURRENCY_CODE);

  findHotels(queryParams: Record<string, unknown>): Observable<SearchHotel[]> {
    const params = castParams(getSearchHotelsOptions(queryParams, this.environment.hotellookToken, this.currency));

    return this.httpClient.get<SearchHotel[]>('/api/hotels/cache.json', { params });
  }

  findHotelsInfo(queryParams: Record<string, unknown>): Observable<SearchHotelInfo[]> {
    const params = castParams(getSearchHotelsInfoOptions(queryParams, this.localeId));

    return this.httpClient.get<SearchHotelsResponse>('/api/hotels/lookup.json', { params }).pipe(map(({ results }) => results.hotels));
  }
}
