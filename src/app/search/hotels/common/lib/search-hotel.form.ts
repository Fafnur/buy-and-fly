import { FormControl, FormGroup, Validators } from '@angular/forms';

import type { FormFor } from '@baf/core';
import type { SearchDestination } from '@baf/search/common';

export interface SearchHotelForm {
  readonly city: string | SearchDestination;
  readonly startDate: string;
  readonly endDate: string;
  readonly passengers: number | undefined;
}

export type SearchHotelFormGroup = FormGroup<FormFor<SearchHotelForm>>;

export const initialSearchHotelFormGroup: SearchHotelFormGroup = new FormGroup({
  city: new FormControl<string | SearchDestination>('', {
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
