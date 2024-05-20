import { OverlayModule } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, of, switchMap, tap } from 'rxjs';

import { SearchCityOrAirport } from '@baf/search/common';
import { SearchService } from '@baf/search/services';

import { SearchInputComponent } from '../search-input/search-input.component';
import { NgForOf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'baf-search-autocomplete',
  standalone: true,
  imports: [OverlayModule, ReactiveFormsModule, SearchInputComponent, NgForOf],
  templateUrl: './search-autocomplete.component.html',
  styleUrl: './search-autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAutocompleteComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly searchService = inject(SearchService);

  @Input({ required: true }) control!: FormControl<string>;

  options: SearchCityOrAirport[] = [];

  isOpen = false;

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query) => {
          if (!query) {
            this.options = [];

            return of([]);
          }

          return this.searchService.findCityOrAirport(query);
        }),
        tap((options) => {
          this.options = options;
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
