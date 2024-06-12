import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFor } from '@baf/core';
import { SearchCityOrAirport } from '@baf/search/common';

export interface SearchAviaForm {
  readonly from: string | SearchCityOrAirport;
  readonly to: string | SearchCityOrAirport;
  readonly startDate: string;
  readonly endDate: string;
  readonly passengers: number | undefined;
}

export type SearchAviaFormGroup = FormGroup<FormFor<SearchAviaForm>>;

export const initialSearchAviaFormGroup: SearchAviaFormGroup = new FormGroup({
  from: new FormControl<string | SearchCityOrAirport>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  to: new FormControl<string | SearchCityOrAirport>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  startDate: new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  endDate: new FormControl<string>('', {
    nonNullable: true,
    validators: [],
  }),
  passengers: new FormControl<number | undefined>(undefined, {
    nonNullable: true,
    validators: [Validators.required, Validators.min(1), Validators.max(20)],
  }),
});
