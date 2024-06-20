import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, TransferState } from '@angular/core';
import { map, Observable } from 'rxjs';

import { castParams, ENV_DEFAULT, ENV_KEY, Environment } from '@baf/core';
import { getSearchFlightOptions, SearchFlight, SearchFlightResponse } from '@baf/search/avia/common';

@Injectable()
export class SearchAviaService {
  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(TransferState).get<Environment>(ENV_KEY, ENV_DEFAULT);
  private readonly currency = inject(DEFAULT_CURRENCY_CODE);

  findFlights(queryParams: Record<string, unknown>): Observable<SearchFlight[]> {
    const params = castParams(getSearchFlightOptions(queryParams, this.environment.aviasalesToken, this.currency));

    return this.httpClient.get<SearchFlightResponse>('/api/aviasales/v3/prices_for_dates', { params }).pipe(map(({ data }) => data));
  }
}
