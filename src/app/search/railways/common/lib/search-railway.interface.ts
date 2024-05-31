import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFor } from '@baf/core';
import { SearchCityOrAirport } from '@baf/search/common';

export interface SearchRailwayForm {
  readonly from: string | SearchCityOrAirport;
  readonly to: string | SearchCityOrAirport;
  readonly startDate: string;
  readonly passengers: number | undefined;
}

export type SearchRailwayFormGroup = FormGroup<FormFor<SearchRailwayForm>>;

export const initialSearchRailwayFormGroup: SearchRailwayFormGroup = new FormGroup({
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
  passengers: new FormControl<number | undefined>(undefined, {
    nonNullable: true,
    validators: [Validators.required, Validators.min(1), Validators.max(20)],
  }),
});
