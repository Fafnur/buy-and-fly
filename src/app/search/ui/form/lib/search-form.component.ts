import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { initialSearchForm } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import {
  SearchDateComponent,
  SearchDestinationComponent,
  SearchGroupComponent,
  SearchPassengersComponent,
  SearchReverseComponent,
} from '@baf/search/ui/fields';
import { ButtonComponent } from '@baf/ui/buttons';

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
