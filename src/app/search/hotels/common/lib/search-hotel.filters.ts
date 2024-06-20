import { FormControl, FormGroup } from '@angular/forms';

import { FormFor } from '@baf/core';

export interface SearchHotelFilters {
  readonly breakfast: boolean;
  readonly freeCancellation: boolean;
  readonly fiveStars: boolean;
}

export type SearchHotelFiltersGroup = FormGroup<FormFor<SearchHotelFilters>>;

export const initialSearchHotelFiltersGroup: SearchHotelFiltersGroup = new FormGroup({
  breakfast: new FormControl(false, { nonNullable: true, validators: [] }),
  fiveStars: new FormControl(false, { nonNullable: true, validators: [] }),
  freeCancellation: new FormControl(false, { nonNullable: true, validators: [] }),
});
