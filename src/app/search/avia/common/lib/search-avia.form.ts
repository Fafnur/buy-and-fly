import { FormControl, FormGroup, Validators } from '@angular/forms';

import type { FormFor } from '@baf/core';
import type { SearchDestination } from '@baf/search/common';

export interface SearchAviaForm {
  readonly from: string | SearchDestination;
  readonly to: string | SearchDestination;
  readonly startDate: string;
  readonly endDate: string;
  readonly passengers: number;
}

export type SearchAviaFormGroup = FormGroup<FormFor<SearchAviaForm>>;

export const initialSearchAviaFormGroup: SearchAviaFormGroup = new FormGroup({
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
  endDate: new FormControl<string>('', {
    nonNullable: true,
    validators: [],
  }),
  passengers: new FormControl<number>(1, {
    nonNullable: true,
    validators: [Validators.required, Validators.min(1), Validators.max(20)],
  }),
});
