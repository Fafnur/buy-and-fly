import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { SearchHotelService } from '@baf/search/hotels/services';

@Component({
  selector: 'baf-search-hotels-result',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  providers: [SearchHotelService],
  templateUrl: './search-hotels-result.component.html',
  styleUrl: './search-hotels-result.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelsResultComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchHotelService = inject(SearchHotelService);

  readonly results$ = this.activatedRoute.queryParams.pipe(switchMap((queryParams) => this.searchHotelService.findHotels(queryParams)));
}
