import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchFlight } from '@baf/search/common';
import { CardComponent } from '@baf/ui/cards';

import { SearchAviaLinkPipe } from './search-avia-link.pipe';

@Component({
  selector: 'baf-search-avia-card',
  standalone: true,
  imports: [CardComponent, SearchAviaLinkPipe, AsyncPipe],
  templateUrl: './search-avia-card.component.html',
  styleUrl: './search-avia-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaCardComponent {
  readonly flight = input.required<SearchFlight>();
}
