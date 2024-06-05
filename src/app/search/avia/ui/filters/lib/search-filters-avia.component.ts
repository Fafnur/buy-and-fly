import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFiltersComponent } from '@baf/search/ui/filters';

import { FilterBaggageComponent } from './filter-baggage/filter-baggage.component';

@Component({
  selector: 'baf-search-filters-avia',
  standalone: true,
  imports: [SearchFiltersComponent, FilterBaggageComponent],
  templateUrl: './search-filters-avia.component.html',
  styleUrl: './search-filters-avia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersAviaComponent {}
