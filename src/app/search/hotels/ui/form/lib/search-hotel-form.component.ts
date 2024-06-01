import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormOptions } from '@baf/search/common';
import { initialSearchHotelFormGroup, SearchHotelForm } from '@baf/search/hotels/common';
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
  selector: 'baf-search-hotel-form',
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
  templateUrl: './search-hotel-form.component.html',
  styleUrl: './search-hotel-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelFormComponent {
  readonly form = initialSearchHotelFormGroup;

  readonly options: SearchFormOptions<SearchHotelForm> = {
    city: { label: $localize`Search Field:City`, id: 'city' },
    startDate: { label: $localize`Search Field:When`, id: 'startDate' },
    endDate: { label: $localize`Search Field:When back`, id: 'endDate', startDate: this.form.controls.startDate },
    passengers: { label: $localize`Search Field:Guests`, id: 'passengers' },
  };
}
