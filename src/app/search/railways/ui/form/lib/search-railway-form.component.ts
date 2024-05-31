import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormOptions } from '@baf/search/common';
import { initialSearchRailwayFormGroup, SearchRailwayForm } from '@baf/search/railways/common';
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

  readonly options: SearchFormOptions<SearchRailwayForm> = {
    from: { label: 'Станция отправления', id: 'from' },
    to: { label: 'Станция прибытия', id: 'to' },
    startDate: { label: 'Когда', id: 'startDate' },
    passengers: { label: 'Пассажиры', id: 'passengers' },
  };
}
