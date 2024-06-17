import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { SearchService } from '@baf/search/services';

import { SearchAviaCardComponent } from './search-avia-card/search-avia-card.component';

@Component({
  selector: 'baf-search-results-avia',
  standalone: true,
  imports: [AsyncPipe, SearchAviaCardComponent],
  templateUrl: './search-results-avia.component.html',
  styleUrl: './search-results-avia.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsAviaComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchService = inject(SearchService);

  readonly results$ = this.activatedRoute.queryParams.pipe(switchMap((queryParams) => this.searchService.findFlights(queryParams)));
}
