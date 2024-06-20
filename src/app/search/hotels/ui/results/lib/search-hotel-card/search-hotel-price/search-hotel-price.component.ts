import { AsyncPipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { getDaysBetweenDates } from '@baf/core';
import { SearchHotel } from '@baf/search/hotels/common';

import { SearchHotelPricePipe } from './search-hotel-price.pipe';

@Component({
  selector: 'baf-search-hotel-price',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, CurrencyPipe, SearchHotelPricePipe],
  templateUrl: './search-hotel-price.component.html',
  styleUrl: './search-hotel-price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelPriceComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly searchHotel = input.required<SearchHotel>();

  readonly days$: Observable<number> = this.activatedRoute.queryParams.pipe(
    map(({ startDate, endDate }) => {
      if (typeof endDate !== 'string' || typeof startDate !== 'string') {
        return 0;
      }

      return getDaysBetweenDates(startDate, endDate);
    }),
  );
}
