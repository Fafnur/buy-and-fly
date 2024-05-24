import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, inject, Input, Output, signal, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent, InputControlComponent } from '@baf/ui/input';
import { LabelComponent } from '@baf/ui/label';

import { CalendarComponent, CalendarSelected } from './calendar/calendar.component';

export interface DatepickerOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
}

@Component({
  selector: 'baf-datepicker',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    InputComponent,
    InputControlComponent,
    LabelComponent,
    CalendarComponent,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-datepicker',
  },
})
export class DatepickerComponent {
  private readonly document = inject(DOCUMENT);

  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: DatepickerOptions;
  @Output() changed = new EventEmitter<string>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  readonly open = signal<boolean>(false);

  get width(): string {
    return this.document.body.clientWidth > 360 ? `360px` : '280px';
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
  }

  onInput(event: Event): void {
    this.changed.emit((event.target as HTMLInputElement).value);
  }

  onSelected(option: CalendarSelected): void {
    this.control.patchValue(option.format);
    this.closed.emit();
    this.open.set(false);
  }
}
