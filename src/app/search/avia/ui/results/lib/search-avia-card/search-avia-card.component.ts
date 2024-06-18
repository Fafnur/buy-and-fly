import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchFlight } from '@baf/search/common';
import { CardComponent } from '@baf/ui/cards';

import { SearchAviaBuyComponent } from './search-avia-buy/search-avia-buy.component';
import { SearchAviaCompaniesComponent } from './search-avia-lines/search-avia-companies/search-avia-companies.component';
import { SearchAviaLinesComponent } from './search-avia-lines/search-avia-lines.component';

@Component({
  selector: 'baf-search-avia-card',
  standalone: true,
  imports: [CardComponent, SearchAviaLinesComponent, SearchAviaBuyComponent, SearchAviaCompaniesComponent],
  templateUrl: './search-avia-card.component.html',
  styleUrl: './search-avia-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaCardComponent {
  readonly searchFlight = input.required<SearchFlight>();
}
