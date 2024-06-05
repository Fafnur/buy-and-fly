import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CanFilter } from '@baf/search/common';
import { SearchFilterDirective } from '@baf/search/ui/filters';

@Component({
  selector: 'baf-filter-baggage',
  standalone: true,
  imports: [SearchFilterDirective],
  templateUrl: './filter-baggage.component.html',
  styleUrl: './filter-baggage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(clear)': 'onReset()',
  },
  hostDirectives: [
    {
      directive: SearchFilterDirective,
      outputs: ['clear'],
    },
  ],
})
export class FilterBaggageComponent implements CanFilter {
  onReset(): void {
    console.log('fuck');
  }
}
