import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, Input, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Observable, of, switchMap, tap } from 'rxjs';

import { SearchCityOrAirport } from '@baf/search/common';
import { SearchService } from '@baf/search/services';

import { SearchInputComponent } from '../search-input/search-input.component';

export interface SearchAutocompleteOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-search-autocomplete',
  standalone: true,
  imports: [OverlayModule, ReactiveFormsModule, SearchInputComponent, NgForOf, AsyncPipe],
  templateUrl: './search-autocomplete.component.html',
  styleUrl: './search-autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAutocompleteComponent implements OnInit {
  private readonly searchService = inject(SearchService);

  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchAutocompleteOptions;

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  options$!: Observable<SearchCityOrAirport[]>;

  readonly opened = signal<boolean>(false);

  get width(): string {
    return this.input?.nativeElement.clientWidth > 200 ? `${this.input.nativeElement.clientWidth}px` : '200px';
  }

  ngOnInit(): void {
    // this.options$ = this.control.valueChanges.pipe(
    //   debounceTime(300),
    //   switchMap((query) => {
    //     if (!query) {
    //       return of([]);
    //     }
    //
    //     return this.searchService.findCityOrAirport(query);
    //   }),
    // );

    this.options$ = of([
      {
        name: 'MOW',
        code: 'aaa',
        type: 'airplane',
      },
      {
        name: 'MOW',
        code: 'bbb',
        type: 'airplane',
      },
      {
        name: 'MOW',
        code: 'ccc',
        type: 'airplane',
      },
    ]);
  }

  onOpen(): void {
    if (!this.opened()) {
      this.opened.set(true);
    }
  }

  onClose(): void {
    this.opened.set(false);
  }
}
