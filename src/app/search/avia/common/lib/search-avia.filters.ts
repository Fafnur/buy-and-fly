import { FormControl, FormGroup } from '@angular/forms';

import type { FormFor } from '@baf/core';

export interface SearchAviaFilters {
  readonly baggage: boolean;
  readonly direct: boolean;
}

export type SearchAviaFiltersGroup = FormGroup<FormFor<SearchAviaFilters>>;

export const initialSearchAviaFiltersGroup: SearchAviaFiltersGroup = new FormGroup({
  baggage: new FormControl(false, { nonNullable: true, validators: [] }),
  direct: new FormControl(false, { nonNullable: true, validators: [] }),
});
