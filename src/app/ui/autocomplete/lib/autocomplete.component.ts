import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';

import { InputComponent } from '@baf/ui/input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AutocompleteVariant = Record<string, any>;

export interface AutocompleteOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly key: string;
  readonly displayFn: (item: any, index?: number) => string;
}

@Component({
  selector: 'baf-autocomplete',
  standalone: true,
  imports: [OverlayModule, ReactiveFormsModule, InputComponent, NgForOf, AsyncPipe],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent implements OnInit {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: AutocompleteOptions;
  @Output() changed = new EventEmitter<string>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @Input({ required: true }) data!: Observable<AutocompleteVariant[]>;

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  readonly open = signal<boolean>(false);

  get width(): string {
    return this.input?.nativeElement.clientWidth > 200 ? `${this.input.nativeElement.clientWidth}px` : '200px';
  }

  displayFn!: (item: AutocompleteVariant, index?: number) => string;

  ngOnInit(): void {
    this.displayFn = this.options.displayFn;
  }

  onOpen(): void {
    if (!this.open()) {
      this.open.set(true);
      this.opened.emit();
    }
  }

  onClose(): void {
    this.closed.emit();
    this.open.set(false);

    this.data
      .pipe(
        take(1),
        tap((options) => {
          if (options.length && this.control.value !== options[0][this.options.key]) {
            this.control.patchValue(options[0][this.options.key], { emitEvent: false });
          }
        }),
      )
      .subscribe();
  }

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }

  onSelect(option: AutocompleteVariant): void {
    this.control.patchValue(option[this.options.key], { emitEvent: false });
    this.closed.emit();
    this.open.set(false);
  }
}
