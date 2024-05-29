import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent, InputControlComponent, InputMaskDirective } from '@baf/ui/input';
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
    InputMaskDirective,
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

  readonly control = input.required<FormControl<string>>();
  readonly options = input.required<DatepickerOptions>();
  readonly changed = output<string>();
  readonly opened = output();
  readonly closed = output();
  readonly input = viewChild('input', { read: ElementRef<HTMLInputElement> });
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
    this.control().patchValue(option.format);
    this.closed.emit();
    this.open.set(false);
  }
}
