import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, take, tap } from 'rxjs';

import { DisplayFn } from '@baf/core';
import { InputComponent, InputControlComponent, InputDisplayDirective } from '@baf/ui/input';
import { LabelComponent } from '@baf/ui/label';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AutocompleteVariant = Record<string, any> & { readonly id: number | string };

export interface AutocompleteOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly key: string;
  readonly displayFn: DisplayFn;
  readonly inputDisplayFn: DisplayFn;
}

@Component({
  selector: 'baf-autocomplete',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    InputComponent,
    NgForOf,
    AsyncPipe,
    InputControlComponent,
    InputDisplayDirective,
    LabelComponent,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-input-control',
  },
})
export class AutocompleteComponent {
  @Input({ required: true }) control!: FormControl<string | AutocompleteVariant>;
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
          if (
            options.length &&
            this.control.value &&
            (typeof this.control.value === 'string' || JSON.stringify(this.control.value) !== JSON.stringify(options[0]))
          ) {
            this.control.patchValue(options[0], { emitEvent: false });
          }
        }),
      )
      .subscribe();
  }

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }

  onSelect(option: AutocompleteVariant): void {
    this.control.patchValue(option, { emitEvent: false });
    this.closed.emit();
    this.open.set(false);
  }
}
