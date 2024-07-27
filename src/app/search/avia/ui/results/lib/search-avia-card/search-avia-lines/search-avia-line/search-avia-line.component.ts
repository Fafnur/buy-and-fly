import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchAviaLine } from '@baf/search/avia/common';

import { SearchAviaDurationComponent } from './search-avia-duration/search-avia-duration.component';
import { SearchAviaDurationPipe } from './search-avia-duration/search-avia-duration.pipe';
import { SearchAviaTimeComponent } from './search-avia-time/search-avia-time.component';

@Component({
  selector: 'baf-search-avia-line',
  standalone: true,
  imports: [SearchAviaDurationPipe, SearchAviaTimeComponent, SearchAviaDurationComponent],
  templateUrl: './search-avia-line.component.html',
  styleUrl: './search-avia-line.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaLineComponent {
  readonly searchLine = input.required<SearchAviaLine>();
}
