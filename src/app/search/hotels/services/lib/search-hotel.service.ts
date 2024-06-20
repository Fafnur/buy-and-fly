import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, inject, Injectable, LOCALE_ID, TransferState } from '@angular/core';
import { map, Observable, of } from 'rxjs';

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
    return of([
      {
        locationId: 12167,
        hotelId: 24879859,
        priceFrom: 25562.17,
        priceAvg: 25562.17,
        pricePercentile: { '3': 25562.17, '10': 25562.17, '35': 25562.17, '50': 25562.17, '75': 25562.17, '99': 25562.17 },
        stars: 5,
        hotelName: 'Novosibirsk Marriott Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 4763047,
        priceFrom: 24656.04,
        priceAvg: 24656.04,
        pricePercentile: { '3': 24656.04, '10': 24656.04, '35': 24656.04, '50': 24656.04, '75': 24656.04, '99': 24656.04 },
        stars: 5,
        hotelName: 'Colibri Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 533567,
        priceFrom: 15585.71,
        priceAvg: 15585.71,
        pricePercentile: { '3': 15585.71, '10': 15585.71, '35': 15585.71, '50': 15585.71, '75': 15585.71, '99': 15585.71 },
        stars: 4,
        hotelName: 'Novosibirsk Congress Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 28798099,
        priceFrom: 26453.23,
        priceAvg: 26453.23,
        pricePercentile: { '3': 26453.23, '10': 26453.23, '35': 26453.23, '50': 26453.23, '75': 26453.23, '99': 26453.23 },
        stars: 4,
        hotelName: 'Domina Hotel Novosibirsk',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 276762,
        priceFrom: 21803.03,
        priceAvg: 21803.03,
        pricePercentile: { '3': 21803.03, '10': 21803.03, '35': 21803.03, '50': 21803.03, '75': 21803.03, '99': 21803.03 },
        stars: 4,
        hotelName: 'DoubleTree by Hilton Novosibirsk',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 1936487,
        priceFrom: 28805.32,
        priceAvg: 28805.32,
        pricePercentile: { '3': 28805.32, '10': 28805.32, '35': 28805.32, '50': 28805.32, '75': 28805.32, '99': 28805.32 },
        stars: 4,
        hotelName: 'Gorskiy City Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 1788976172,
        priceFrom: 20118.38,
        priceAvg: 20118.38,
        pricePercentile: { '3': 20118.38, '10': 20118.38, '35': 20118.38, '50': 20118.38, '75': 20118.38, '99': 20118.38 },
        stars: 4,
        hotelName: 'Ramada Hotel & Suites by Wyndham Novosibirsk Zhukovka',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 45440124,
        priceFrom: 17533.92,
        priceAvg: 17533.92,
        pricePercentile: { '3': 17533.92, '10': 17533.92, '35': 17533.92, '50': 17533.92, '75': 17533.92, '99': 17533.92 },
        stars: 4,
        hotelName: 'Comfort Nsk Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 529451,
        priceFrom: 34779.04,
        priceAvg: 34779.04,
        pricePercentile: { '3': 34779.04, '10': 34779.04, '35': 34779.04, '50': 34779.04, '75': 34779.04, '99': 34779.04 },
        stars: 4,
        hotelName: 'Park Hotel Sosnovy Bor',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 565349,
        priceFrom: 21430.35,
        priceAvg: 21430.35,
        pricePercentile: { '3': 21430.35, '10': 21430.35, '35': 21430.35, '50': 21430.35, '75': 21430.35, '99': 21430.35 },
        stars: 4,
        hotelName: 'AVANTA hotel-center',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 380922,
        priceFrom: 11695.11,
        priceAvg: 11695.11,
        pricePercentile: { '3': 11695.11, '10': 11695.11, '35': 11695.11, '50': 11695.11, '75': 11695.11, '99': 11695.11 },
        stars: 3,
        hotelName: 'River Park',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 276761,
        priceFrom: 13087.39,
        priceAvg: 13087.39,
        pricePercentile: { '3': 13087.39, '10': 13087.39, '35': 13087.39, '50': 13087.39, '75': 13087.39, '99': 13087.39 },
        stars: 3,
        hotelName: 'AZIMUT Hotel Siberia',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 1198398319,
        priceFrom: 14107.85,
        priceAvg: 14107.85,
        pricePercentile: { '3': 14107.85, '10': 14107.85, '35': 14107.85, '50': 14107.85, '75': 14107.85, '99': 14107.85 },
        stars: 3,
        hotelName: 'Silver Horse Boutique Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 46161229,
        priceFrom: 7986.09,
        priceAvg: 7986.09,
        pricePercentile: { '3': 7986.09, '10': 7986.09, '35': 7986.09, '50': 7986.09, '75': 7986.09, '99': 7986.09 },
        stars: 3,
        hotelName: 'Ahotels Design Style on Tolstogo',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 715197,
        priceFrom: 12808.93,
        priceAvg: 12808.93,
        pricePercentile: { '3': 12808.93, '10': 12808.93, '35': 12808.93, '50': 12808.93, '75': 12808.93, '99': 12808.93 },
        stars: 3,
        hotelName: 'Zolotoye Runo',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 11291320,
        priceFrom: 11506.28,
        priceAvg: 11506.28,
        pricePercentile: { '3': 11506.28, '10': 11506.28, '35': 11506.28, '50': 11506.28, '75': 11506.28, '99': 11506.28 },
        stars: 3,
        hotelName: 'Arkada Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 31351681,
        priceFrom: 8345.3,
        priceAvg: 8345.3,
        pricePercentile: { '3': 8345.3, '10': 8345.3, '35': 8345.3, '50': 8345.3, '75': 8345.3, '99': 8345.3 },
        stars: 3,
        hotelName: 'Ahotels Design Style on Sovetskaya',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 715180,
        priceFrom: 8632.11,
        priceAvg: 8632.11,
        pricePercentile: { '3': 8632.11, '10': 8632.11, '35': 8632.11, '50': 8632.11, '75': 8632.11, '99': 8632.11 },
        stars: 2,
        hotelName: 'Tikhaya Ploshad',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 47651879,
        priceFrom: 10978.19,
        priceAvg: 10978.19,
        pricePercentile: { '3': 10978.19, '10': 10978.19, '35': 10978.19, '50': 10978.19, '75': 10978.19, '99': 10978.19 },
        stars: 2,
        hotelName: 'Grand Hotel',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
      {
        locationId: 12167,
        hotelId: 964295009,
        priceFrom: 7468.16,
        priceAvg: 7468.16,
        pricePercentile: { '3': 7468.16, '10': 7468.16, '35': 7468.16, '50': 7468.16, '75': 7468.16, '99': 7468.16 },
        stars: 2,
        hotelName: 'Hotel Korona',
        location: { name: 'Novosibirsk', country: 'Russia', state: null, geo: { lat: 55.034214, lon: 82.906211 } },
      },
    ]);
    //
    // const params = castParams(getSearchHotelsOptions(queryParams, this.environment.hotellookToken, this.currency));
    //
    // return this.httpClient.get<SearchHotel[]>('/api/hotels/cache.json', { params });
  }

  findHotelsInfo(queryParams: Record<string, unknown>): Observable<SearchHotelInfo[]> {
    const params = castParams(getSearchHotelsInfoOptions(queryParams, this.localeId));

    return this.httpClient.get<SearchHotelsResponse>('/api/hotels/lookup.json', { params }).pipe(map(({ results }) => results.hotels));
  }
}
