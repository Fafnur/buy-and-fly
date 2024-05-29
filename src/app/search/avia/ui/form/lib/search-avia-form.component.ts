import { ChangeDetectionStrategy, Component } from '@angular/core';

import { initialSearchAviaFormGroup, SearchAviaForm } from '@baf/search/avia/common';
import { SearchFormOptions } from '@baf/search/common';
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

  readonly options: SearchFormOptions<SearchAviaForm> = {
    from: { label: 'Откуда', id: 'from' },
    to: { label: 'Куда', id: 'to' },
    startDate: { label: 'Когда', id: 'startDate' },
    endDate: { label: 'Обратно', id: 'endDate', startDate: this.form.controls.startDate },
    passengers: { label: 'Пассажиры', id: 'from' },
  };
}
