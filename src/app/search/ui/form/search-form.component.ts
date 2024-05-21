import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { initialSearchForm } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import { ButtonComponent } from '@baf/ui/buttons';

import { SearchDateComponent } from './search-date/search-date.component';
import { SearchDestinationComponent } from './search-destination/search-destination.component';
import { SearchGroupComponent } from './search-group/search-group.component';
import { SearchPassengersComponent } from './search-passengers/search-passengers.component';
import { SearchReverseComponent } from './search-reverse/search-reverse.component';

@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [
    SearchGroupComponent,
    SearchDestinationComponent,
    SearchReverseComponent,
    SearchDateComponent,
    SearchPassengersComponent,
    ButtonComponent,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SearchService],
})
export class SearchFormComponent {
  private readonly searchService = inject(SearchService);

  readonly form = initialSearchForm;

  onSubmit(): void {}
}
