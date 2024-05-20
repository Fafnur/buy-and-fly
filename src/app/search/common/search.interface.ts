import { FormGroup } from '@angular/forms';

import { FormFor } from '@baf/core';

export interface SearchForm {
  readonly from: string;
  readonly to: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly passengers: number;
}

export type SearchFormGroup = FormGroup<FormFor<SearchForm>>;

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
/* eslint-enable @typescript-eslint/naming-convention */

export interface SearchCityOrAirport {
  readonly type: string;
  readonly code: string;
  readonly name: string;
}
