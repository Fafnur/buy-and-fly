import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { SearchAviaFilters } from '@baf/search/avia/common';
import { initialSearchAviaFiltersGroup } from '@baf/search/avia/common';
import type { SearchFormOptions } from '@baf/search/common';
import { SearchFiltersComponent } from '@baf/search/ui/filters';

import { FilterBaggageComponent } from './filter-baggage/filter-baggage.component';
import { FilterDirectComponent } from './filter-direct/filter-direct.component';

@Component({
  selector: 'baf-search-filters-avia',
  standalone: true,
  imports: [SearchFiltersComponent, FilterBaggageComponent, FilterDirectComponent],
  templateUrl: './search-filters-avia.component.html',
  styleUrl: './search-filters-avia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersAviaComponent {
  readonly form = initialSearchAviaFiltersGroup;

  readonly options: SearchFormOptions<SearchAviaFilters> = {
    baggage: { label: $localize`:Search Filter:Baggage`, id: 'baggage', name: 'baggage' },
    direct: { label: $localize`:Search Filter:Direct`, id: 'direct', name: 'direct' },
  };
}
