import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SearchHotel } from '@baf/search/hotels/common';
import { CardComponent } from '@baf/ui/cards';

import { SearchHotelPhotosComponent } from './search-hotel-photos/search-hotel-photos.component';
import { SearchHotelPriceComponent } from './search-hotel-price/search-hotel-price.component';
import { SearchHotelStarsComponent } from './search-hotel-stars/search-hotel-stars.component';
import { SearchHotelTitleComponent } from './search-hotel-title/search-hotel-title.component';
import { SearchHotelViewComponent } from './search-hotel-view/search-hotel-view.component';

@Component({
  selector: 'baf-search-hotel-card',
  standalone: true,
  imports: [
    CardComponent,
    SearchHotelStarsComponent,
    SearchHotelPriceComponent,
    SearchHotelViewComponent,
    SearchHotelTitleComponent,
    SearchHotelViewComponent,
    SearchHotelPhotosComponent,
  ],
  templateUrl: './search-hotel-card.component.html',
  styleUrl: './search-hotel-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelCardComponent {
  readonly searchHotel = input.required<SearchHotel>();
}
