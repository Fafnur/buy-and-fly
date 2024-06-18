import { inject, Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';

import { SearchService } from '@baf/search/services';

@Pipe({
  name: 'searchAviaDestinationName',
  standalone: true,
})
export class SearchAviaDestinationNamePipe implements PipeTransform {
  private readonly searchService = inject(SearchService);

  transform(code: string): Observable<string> {
    return of(code).pipe(
      switchMap(() =>
        this.searchService.findDestination(code, ['airport']).pipe(
          map(([first]) => {
            if (!first) {
              return '';
            }

            return first.name;
          }),
        ),
      ),
    );
  }
}
