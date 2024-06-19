import { OutputEmitterRef } from '@angular/core';

import { PathValues } from '@baf/core';

export enum SearchType {
  Avia = 'avia',
  Hotel = 'hotel',
  Tour = 'tour',
  Railway = 'railway',
}

export interface SearchDeclination {
  readonly vi: string;
  readonly tv: string;
  readonly su: string;
  readonly ro: string;
  readonly pr: string;
  readonly da: string;
}

/* eslint-disable @typescript-eslint/naming-convention */
export interface SearchCityOrAirportDTO {
  readonly id: string;
  readonly type: string;
  readonly code: string;
  readonly name: string;
  readonly country_code: string;
  readonly country_name: string;
  readonly city_name?: string;
  readonly state_code: string | null;
  readonly coordinates: {
    readonly lon: number;
    readonly lat: number;
  };
  readonly index_strings: unknown[];
  readonly weight: number;
  readonly cases: SearchDeclination | null;
  readonly country_cases: SearchDeclination | null;
  readonly main_airport_name: string | null;
}

export interface SearchDestination {
  readonly [key: string]: unknown;
  readonly id: string;
  readonly type: string;
  readonly code: string;
  readonly name: string;
  readonly country_name: string;
  readonly city_name: string;
  readonly value: string;
}
/* eslint-enable @typescript-eslint/naming-convention */

export interface SearchFieldOptions {
  readonly [key: string]: unknown;
  readonly id: string;
  readonly label: string;
  readonly name?: string;
  readonly placeholder?: string;
}

export type SearchFormOptions<T> = {
  readonly [P in keyof T]: SearchFieldOptions;
};

export interface CanSubmit {
  readonly submitted: OutputEmitterRef<unknown>;
  readonly redirectTo: PathValues;
}

export interface CanFilter {
  onReset(): void;
}

export interface SearchFlightOptions {
  readonly [key: string]: unknown;

  readonly currency: string;
  readonly origin: string;
  readonly destination: string;
  readonly departure_at: string;
  readonly return_at?: string;
  readonly one_way?: string;
  readonly direct?: boolean;
  readonly unique?: boolean;
  readonly limit?: number;
  readonly page?: number;
  readonly soring?: string;

  readonly token: string;
}

export interface SearchFlight {
  readonly origin: string;
  readonly destination: string;
  readonly origin_airport: string;
  readonly destination_airport: string;
  readonly price: number;
  readonly airline: string;
  readonly flight_number: string;
  readonly departure_at: string;
  readonly return_at: string;
  readonly transfers: number;
  readonly return_transfers: number;
  readonly duration: number;
  readonly duration_to: number;
  readonly duration_back: number;
  readonly link: string;
}

export interface SearchFlightResponse {
  readonly success: boolean;
  readonly data: SearchFlight[];
  readonly currency: string;
}

export interface SearchHotelsOptions {
  readonly query: string;
  readonly lang: string;
  readonly limit: number;
  readonly lookFor: string[];
  readonly convertCase: 1 | 0;
}

export interface SearchHotelsResponse {
  readonly results: {
    readonly locations: [
      {
        readonly cityName: string;
        readonly fullName: string;
        readonly countryCode: string;
        readonly countryName: string;
        readonly iata: string[];
        readonly id: string;
        readonly hotelsCount: string;
        readonly location: {
          readonly lat: string;
          readonly lon: string;
        };
        readonly _score: number;
      },
    ];
    readonly hotels: [
      {
        readonly label: string;
        readonly locationName: string;
        readonly locationId: string;
        readonly id: string;
        readonly fullName: string;
        readonly location: {
          readonly lat: string;
          readonly lon: string;
        };
      },
    ];
  };
  readonly status: string;
}

export function getSearchQueryParams(form: {
  readonly [key: string]: string | number | boolean | Record<string, unknown>;
}): Record<string, unknown> {
  const params: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(form)) {
    console.log(value);

    if (!!value && typeof value === 'object') {
      params[key] = 'value' in value ? value['value'] : undefined;
      params[`${key}Name`] = 'city_name' in value ? value['city_name'] : undefined;
    } else {
      params[key] = value;
    }
  }

  return params;
}
