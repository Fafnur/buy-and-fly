import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { PATHS } from '@baf/core';
import { initialSearchAviaFormGroup, SearchAviaForm } from '@baf/search/avia/common';
import { CanSubmit, SearchFormOptions } from '@baf/search/common';
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
export class SearchAviaFormComponent implements CanSubmit {
  readonly form = initialSearchAviaFormGroup;
  readonly submitted = output<SearchAviaForm>();

  readonly redirectTo = PATHS.searchAvia;

  readonly options: SearchFormOptions<SearchAviaForm> = {
    from: { label: $localize`:Search Field:Where from`, id: 'from' },
    to: { label: $localize`:Search Field:Where to`, id: 'to' },
    startDate: { label: $localize`:Search Field:When`, id: 'startDate' },
    endDate: { label: $localize`:Search Field:When back`, id: 'endDate', startDate: this.form.controls.startDate },
    passengers: { label: $localize`:Search Field:Passengers`, id: 'passengers' },
  };

  onSubmit(): void {
    this.submitted.emit(this.form.getRawValue());
  }
}
