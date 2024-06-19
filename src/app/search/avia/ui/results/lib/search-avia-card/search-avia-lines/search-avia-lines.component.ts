import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchFlight } from '@baf/search/common';
import { AnchorComponent } from '@baf/ui/buttons';
import { CardComponent } from '@baf/ui/cards';

import { SearchAviaLinePipe } from './search-avia-line.pipe';
import { SearchAviaLineComponent } from './search-avia-line/search-avia-line.component';

@Component({
  selector: 'baf-search-avia-lines',
  standalone: true,
  imports: [SearchAviaLinePipe, SearchAviaLineComponent, AnchorComponent, CardComponent, CurrencyPipe],
  templateUrl: './search-avia-lines.component.html',
  styleUrl: './search-avia-lines.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaLinesComponent {
  readonly searchFlight = input.required<SearchFlight>();
}
