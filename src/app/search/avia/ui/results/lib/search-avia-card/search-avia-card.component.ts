import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchFlight } from '@baf/search/avia/common';
import { CardComponent } from '@baf/ui/cards';

import { SearchAviaBuyComponent } from './search-avia-buy/search-avia-buy.component';
import { SearchAviaCompaniesComponent } from './search-avia-companies/search-avia-companies.component';
import { SearchAviaLinesComponent } from './search-avia-lines/search-avia-lines.component';
import { SearchAviaPriceComponent } from './search-avia-price/search-avia-price.component';

@Component({
  selector: 'baf-search-avia-card',
  standalone: true,
  imports: [CardComponent, SearchAviaLinesComponent, SearchAviaBuyComponent, SearchAviaCompaniesComponent, SearchAviaPriceComponent],
  templateUrl: './search-avia-card.component.html',
  styleUrl: './search-avia-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaCardComponent {
  readonly searchFlight = input.required<SearchFlight>();
}
