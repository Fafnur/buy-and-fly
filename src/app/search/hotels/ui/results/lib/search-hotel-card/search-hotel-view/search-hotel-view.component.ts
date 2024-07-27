import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchHotel } from '@baf/search/hotels/common';
import { AnchorComponent } from '@baf/ui/buttons';

import { SearchHotelViewPipe } from './search-hotel-view.pipe';

@Component({
  selector: 'baf-search-hotel-view',
  standalone: true,
  imports: [SearchHotelViewPipe, AnchorComponent, CurrencyPipe],
  templateUrl: './search-hotel-view.component.html',
  styleUrl: './search-hotel-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelViewComponent {
  readonly searchHotel = input.required<SearchHotel>();
}
