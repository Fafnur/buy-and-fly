import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchHotel } from '@baf/search/hotels/common';
import { CardComponent } from '@baf/ui/cards';

import { SearchHotelStarsComponent } from './search-hotel-stars/search-hotel-stars.component';

@Component({
  selector: 'baf-search-hotel-card',
  standalone: true,
  imports: [CardComponent, CurrencyPipe, SearchHotelStarsComponent],
  templateUrl: './search-hotel-card.component.html',
  styleUrl: './search-hotel-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelCardComponent {
  readonly searchHotel = input.required<SearchHotel>();
}
