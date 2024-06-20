import { castQueryParams } from '@baf/core';

export interface SearchDeclination {
  readonly vi: string;
  readonly tv: string;
  readonly su: string;
  readonly ro: string;
  readonly pr: string;
  readonly da: string;
}

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

export interface SearchAviaLine {
  readonly origin: string;
  readonly originName: string;
  readonly destination: string;
  readonly destinationName: string;
  readonly duration: number;
  readonly departureAt: string;
  readonly arriveAt: string;
  readonly transfers: number;
}

export function getSearchFlightOptions(queryParams: Record<string, unknown>, token: string, currency: string): SearchFlightOptions {
  const { from, to, direct, startDate, endDate } = castQueryParams(queryParams);

  if (
    typeof from !== 'string' ||
    typeof to !== 'string' ||
    (typeof direct !== 'boolean' && typeof direct !== 'undefined') ||
    typeof startDate !== 'string' ||
    (typeof endDate !== 'string' && typeof endDate !== 'undefined')
  ) {
    throw new Error('Invalid search flight options');
  }

  return {
    origin: from,
    destination: to,
    direct,
    currency: currency.toLowerCase(),
    departure_at: startDate,
    return_at: endDate,
    token,
    sorting: 'price',
  };
}
