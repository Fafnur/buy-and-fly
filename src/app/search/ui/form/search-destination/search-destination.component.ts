import { ChangeDetectionStrategy, Component, DestroyRef, HostBinding, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, of, switchMap, tap } from 'rxjs';

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

  @Input({ required: true }) control!: FormControl<string>;
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
      displayFn: (item: SearchCityOrAirport) => {
        return item.code;
      },
    };
    this.control.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query) => {
          if (!query) {
            return of([]);
          }

          return this.searchService.findCityOrAirport(query);
        }),
        tap((response) => this.data$.next(response.slice(0, 10))),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onClosed(): void {
    const options = this.data$.getValue();
    if (options.length && this.control.value !== options[0].code) {
      this.control.patchValue(options[0].code, { emitEvent: false });
    }
  }
}
