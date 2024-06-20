import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchAviaLine } from '@baf/search/avia/common';

import { SearchAviaDurationPipe } from './search-avia-duration/search-avia-duration.pipe';
import { SearchAviaTimeComponent } from './search-avia-time/search-avia-time.component';
import { SearchAviaDurationComponent } from './search-avia-duration/search-avia-duration.component';

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
