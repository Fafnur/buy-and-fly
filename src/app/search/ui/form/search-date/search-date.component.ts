import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from '../search-input/search-input.component';

export interface SearchDateOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly startDate?: FormControl<string>;
}

@Component({
  selector: 'baf-search-date',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, SearchInputComponent],
  templateUrl: './search-date.component.html',
  styleUrl: './search-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDateComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchDateOptions;

  @HostBinding('class.is-hide') get isHide() {
    return this.options.startDate?.invalid;
  }

  @HostBinding('class.is-valid') get isValid() {
    return this.control.valid;
  }

  @HostBinding('class.is-start-date') get isFrom() {
    return this.options.id === 'startDate';
  }

  @HostBinding('class.is-end-date') get isTo() {
    return this.options.id === 'endDate';
  }
}
