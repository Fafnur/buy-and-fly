import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchFlight } from '@baf/search/common';
import { AnchorComponent } from '@baf/ui/buttons';

import { SearchAviaLinkPipe } from './search-avia-link.pipe';

@Component({
  selector: 'baf-search-avia-buy',
  standalone: true,
  imports: [SearchAviaLinkPipe, AnchorComponent, CurrencyPipe],
  templateUrl: './search-avia-buy.component.html',
  styleUrl: './search-avia-buy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaBuyComponent {
  readonly searchFlight = input.required<SearchFlight>();
}
