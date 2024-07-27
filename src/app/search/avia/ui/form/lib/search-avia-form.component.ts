import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PATHS } from '@baf/core';
import type { SearchAviaForm } from '@baf/search/avia/common';
import { initialSearchAviaFormGroup } from '@baf/search/avia/common';
import type { SearchFormOptions } from '@baf/search/common';
import {
  SearchDateComponent,
  SearchDestinationComponent,
  SearchGroupComponent,
  SearchPassengersComponent,
  SearchReverseComponent,
} from '@baf/search/ui/fields';
import { SearchFormComponent } from '@baf/search/ui/form';
import { ButtonComponent } from '@baf/ui/buttons';

@Component({
  selector: 'baf-search-avia-form',
  standalone: true,
  imports: [
    SearchFormComponent,
    SearchGroupComponent,
    SearchDestinationComponent,
    SearchReverseComponent,
    SearchDateComponent,
    SearchPassengersComponent,
    ButtonComponent,
  ],
  templateUrl: './search-avia-form.component.html',
  styleUrl: './search-avia-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaFormComponent {
  readonly form = initialSearchAviaFormGroup;
  readonly redirectTo = PATHS.searchAvia;
  readonly name = 'city_name';

  readonly options: SearchFormOptions<SearchAviaForm> = {
    from: { label: $localize`:Search Field:Where from`, id: 'from', types: ['city', 'airport'] },
    to: { label: $localize`:Search Field:Where to`, id: 'to', types: ['city', 'airport'] },
    startDate: { label: $localize`:Search Field:When`, id: 'startDate' },
    endDate: { label: $localize`:Search Field:When back`, id: 'endDate', startDate: this.form.controls.startDate },
    passengers: { label: $localize`:Search Field:Passengers`, id: 'passengers' },
  };
}
