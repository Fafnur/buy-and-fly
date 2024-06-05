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

export interface SearchCityOrAirport {
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

export type SearchFormOptions<T> = {
  readonly [P in keyof T]: {
    readonly [key: string]: unknown;
    readonly id: string;
    readonly label: string;
    readonly placeholder?: string;
  };
};

export interface CanSubmit {
  readonly submitted: OutputEmitterRef<unknown>;
  readonly redirectTo: PathValues;
}
