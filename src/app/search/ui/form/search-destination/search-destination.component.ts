import { ChangeDetectionStrategy, Component, DestroyRef, HostBinding, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, EMPTY, of, switchMap, tap } from 'rxjs';

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
  imports: [ReactiveFormsModule, InputComponent, AutocompleteComponent],
  templateUrl: './search-destination.component.html',
  styleUrl: './search-destination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDestinationComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchService = inject(SearchService);

  @Input({ required: true }) control!: FormControl<string | SearchCityOrAirport>;
  @Input({ required: true }) options!: SearchDestinationOptions;

  @HostBinding('class.is-from') get isFrom() {
    return this.options.id === 'from';
  }

  @HostBinding('class.is-to') get isTo() {
    return this.options.id === 'to';
  }

  autocompleteOptions!: AutocompleteOptions;

  readonly data$ = new BehaviorSubject<SearchCityOrAirport[]>([]);

  ngOnInit(): void {
    this.autocompleteOptions = {
      ...this.options,
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

    this.control.valueChanges
      .pipe(
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
