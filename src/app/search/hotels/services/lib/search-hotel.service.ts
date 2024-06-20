import { HttpClient } from '@angular/common/http';
import { inject, Injectable, LOCALE_ID, TransferState } from '@angular/core';
import { Observable } from 'rxjs';

import { castParams, ENV_DEFAULT, ENV_KEY, Environment } from '@baf/core';
import { getSearchHotelsOptions } from '@baf/search/hotels/common';

@Injectable()
export class SearchHotelService {
  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(TransferState).get<Environment>(ENV_KEY, ENV_DEFAULT);
  private readonly localeId = inject(LOCALE_ID);

  findHotels(queryParams: Record<string, unknown>): Observable<unknown> {
    const params = castParams(getSearchHotelsOptions(queryParams, this.environment.hotellookToken, this.localeId));

    return this.httpClient.get('/api/hotels', { params });
  }
}
