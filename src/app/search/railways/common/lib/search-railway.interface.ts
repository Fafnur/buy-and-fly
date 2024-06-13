import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormFor } from '@baf/core';
import { SearchDestination } from '@baf/search/common';

export interface SearchRailwayForm {
  readonly from: string | SearchDestination;
  readonly to: string | SearchDestination;
  readonly startDate: string;
  readonly passengers: number | undefined;
}

export type SearchRailwayFormGroup = FormGroup<FormFor<SearchRailwayForm>>;

export const initialSearchRailwayFormGroup: SearchRailwayFormGroup = new FormGroup({
  from: new FormControl<string | SearchDestination>('', {
    nonNullable: true,
    validators: [Validators.required],
  }),
  to: new FormControl<string | SearchDestination>('', {
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
