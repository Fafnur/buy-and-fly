import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { SearchCityOrAirport } from '@baf/search/common';
import { InputComponent } from '@baf/ui/input';

export interface SearchAutocompleteOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-autocomplete',
  standalone: true,
  imports: [OverlayModule, ReactiveFormsModule, InputComponent, NgForOf, AsyncPipe],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: SearchAutocompleteOptions;

  // TODO: Change interface
  @Input({ required: true }) options$!: Observable<SearchCityOrAirport[]>;

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  readonly opened = signal<boolean>(false);

  get width(): string {
    return this.input?.nativeElement.clientWidth > 200 ? `${this.input.nativeElement.clientWidth}px` : '200px';
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
