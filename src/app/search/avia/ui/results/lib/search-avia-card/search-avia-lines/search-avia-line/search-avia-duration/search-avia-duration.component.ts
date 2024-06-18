import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchAviaLine } from '@baf/search/avia/common';

import { SearchAviaTimeComponent } from '../search-avia-time/search-avia-time.component';
import { SearchAviaDurationPipe } from './search-avia-duration.pipe';

@Component({
  selector: 'baf-search-avia-duration',
  standalone: true,
  imports: [SearchAviaDurationPipe, SearchAviaTimeComponent, DecimalPipe],
  templateUrl: './search-avia-duration.component.html',
  styleUrl: './search-avia-duration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaDurationComponent {
  readonly searchLine = input.required<SearchAviaLine>();
}
