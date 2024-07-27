import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PATHS } from '@baf/core';
import type { SearchFormOptions } from '@baf/search/common';
import type { SearchRailwayForm } from '@baf/search/railways/common';
import { initialSearchRailwayFormGroup } from '@baf/search/railways/common';
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
  selector: 'baf-search-railway-form',
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
  templateUrl: './search-railway-form.component.html',
  styleUrl: './search-railway-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchRailwayFormComponent {
  readonly form = initialSearchRailwayFormGroup;
  readonly redirectTo = PATHS.searchRailway;

  readonly options: SearchFormOptions<SearchRailwayForm> = {
    from: { label: $localize`:Search Field:Departure station`, id: 'from', types: ['city'] },
    to: { label: $localize`:Search Field:Arrival station`, id: 'to', types: ['city'] },
    startDate: { label: $localize`:Search Field:When`, id: 'startDate' },
    passengers: { label: $localize`:Search Field:Passengers`, id: 'passengers' },
  };
}
