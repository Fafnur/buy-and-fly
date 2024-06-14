import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { EMPTY, of, switchMap } from 'rxjs';

import { SearchType } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import { ContainerComponent } from '@baf/ui/container';

export const SEARCH_RESULTS_TYPE = new InjectionToken<SearchType>('SEARCH_RESULTS_TYPE');

export function provideSearchType(type: SearchType): Provider {
  return {
    provide: SEARCH_RESULTS_TYPE,
    useValue: type,
  };
}

@Component({
  selector: 'baf-search-results',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, ContainerComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly searchService = inject(SearchService);
  private readonly type = inject(SEARCH_RESULTS_TYPE);

  readonly results$ = this.activatedRoute.queryParams.pipe(
    switchMap((queryParams) => {
      // this.searchService.getResults(this.type, queryParams)
      console.log(queryParams);
      return of([]);
    }),
  );
}
