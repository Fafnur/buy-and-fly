import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, EMPTY, of, switchMap, tap } from 'rxjs';

import { ExtraClassService, toClass } from '@baf/core';
import { SearchCityOrAirport } from '@baf/search/common';
import { SearchService } from '@baf/search/services';
import { AutocompleteComponent, AutocompleteOptions } from '@baf/ui/autocomplete';
import { InputComponent } from '@baf/ui/input';

export interface SearchDestinationOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-destination',
  standalone: true,
  imports: [InputComponent, AutocompleteComponent],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService],
})
export class SearchDestinationComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchService = inject(SearchService);
  private readonly extraClassService = inject(ExtraClassService);

  readonly control = input.required<FormControl<string | SearchCityOrAirport>>();
  readonly options = input.required<AutocompleteOptions, SearchDestinationOptions>({
    transform: (options) => {
      this.extraClassService.update('options', toClass(options.id));

      return {
        ...options,
        key: 'code',
        displayFn: (item: SearchCityOrAirport) => {
          return `${item.name}, ${item.code}<br>${item.country_name}, ${item.city_name ?? item.name}`;
        },
        inputDisplayFn: (item: SearchCityOrAirport | string) => {
          if (!item) {
            return '';
          }
          if (typeof item === 'string') {
            return item;
          }

          return `${item.name}, ${item.code}`;
        },
      };
    },
  });

  readonly data$ = new BehaviorSubject<SearchCityOrAirport[]>([]);

  ngOnInit(): void {
    this.control()
      .valueChanges.pipe(
        debounceTime(300),
        switchMap((query) => {
          if (!query) {
            return of([]);
          }

          if (typeof query !== 'string') {
            return EMPTY;
          }

          return this.searchService.findCityOrAirport(query);
        }),
        tap((response) => this.data$.next(response.slice(0, 6))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
