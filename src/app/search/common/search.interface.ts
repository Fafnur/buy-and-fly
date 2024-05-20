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
