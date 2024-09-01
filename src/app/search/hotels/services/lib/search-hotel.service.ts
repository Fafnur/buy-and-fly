import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, LOCALE_ID, TransferState } from '@angular/core';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';

import type { Environment } from '@baf/core';
import { castParams, ENV_DEFAULT, ENV_KEY } from '@baf/core';
import type {
  SearchHotel,
  SearchHotelDetails,
  SearchHotelDto,
  SearchHotelInfo,
  SearchHotelsDetailsResponse,
  SearchHotelsResponse,
} from '@baf/search/hotels/common';
import { getSearchHotelsInfoOptions, getSearchHotelsOptions } from '@baf/search/hotels/common';

@Injectable()
export class SearchHotelService {
  private readonly httpClient = inject(HttpClient);
  private readonly environment = inject(TransferState).get<Environment>(ENV_KEY, ENV_DEFAULT);
  private readonly localeId = inject(LOCALE_ID);
  private readonly currency = inject(DEFAULT_CURRENCY_CODE);

  findHotels(queryParams: Record<string, unknown>): Observable<SearchHotel[]> {
    const params = castParams(getSearchHotelsOptions(queryParams, this.environment.hotellookToken, this.currency));

    return this.httpClient.get<SearchHotelDto[]>('/api/hotels/cache.json', { params }).pipe(
      map((response) => {
        // На фронте так делать не нужно. Должен быть бэк, где будет собираться данные и кешироваться.
        // Это только для примера.
        return response.map((hotel) => ({
          ...hotel,
          photos: [
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_0/320/240.auto`,
              width: 320,
              height: 240,
            },
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_1/320/240.auto`,
              width: 320,
              height: 240,
            },
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_2/320/240.auto`,
              width: 320,
              height: 240,
            },
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_3/320/240.auto`,
              width: 320,
              height: 240,
            },
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_4/320/240.auto`,
              width: 320,
              height: 240,
            },
            {
              url: `https://photo.hotellook.com/image_v2/limit/h${hotel.hotelId}_5/320/240.auto`,
              width: 320,
              height: 240,
            },
          ],
        }));
      }),
    );
  }

  findHotelsInfo(queryParams: Record<string, unknown>): Observable<SearchHotelInfo[]> {
    const params = castParams(getSearchHotelsInfoOptions(queryParams, this.localeId));

    return this.httpClient.get<SearchHotelsResponse>('/api/hotels/lookup.json', { params }).pipe(map(({ results }) => results.hotels));
  }

  getHotelsDetails(locationId: number): Observable<SearchHotelDetails[]> {
    const params = {
      locationId,
      token: this.environment.hotellookToken,
    };

    return this.httpClient.get<SearchHotelsDetailsResponse>('/api/hotels/static/hotels.json', { params }).pipe(map(({ hotels }) => hotels));
  }
}
