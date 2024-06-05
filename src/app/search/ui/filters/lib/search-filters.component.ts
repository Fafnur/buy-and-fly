import { ChangeDetectionStrategy, Component, contentChildren } from '@angular/core';

import { ButtonComponent } from '@baf/ui/buttons';

import { SearchFilterDirective } from './search-filter.directive';

@Component({
  selector: 'baf-search-filters',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {
  readonly filters = contentChildren(SearchFilterDirective);

  onReset(): void {
    this.filters().map((filter) => filter.clear.emit());
  }
}
