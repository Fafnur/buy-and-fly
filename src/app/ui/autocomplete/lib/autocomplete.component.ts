import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { InputComponent } from '@baf/ui/input';

export interface SearchAutocompleteOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly key?: string;
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
  @Output() changed = new EventEmitter<string>();

  @Input({ required: true }) options$!: Observable<Record<string, unknown>[]>;

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  readonly opened = signal<boolean>(false);

  get width(): string {
    return this.input?.nativeElement.clientWidth > 200 ? `${this.input.nativeElement.clientWidth}px` : '200px';
  }

  get key(): string {
    return this.options.key ?? 'code';
  }

  onOpen(): void {
    if (!this.opened()) {
      this.opened.set(true);
    }
  }

  onClose(): void {
    this.opened.set(false);
  }

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }
}
