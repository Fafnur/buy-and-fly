import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { AsyncPipe, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputComponent, InputControlComponent } from '@baf/ui/input';
import { LabelComponent } from '@baf/ui/label';

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
    AsyncPipe,
    InputControlComponent,
    LabelComponent,
    DatePipe,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-datepicker',
  },
})
export class DatepickerComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) control!: FormControl<string>;
  @Input({ required: true }) options!: DatepickerOptions;
  @Output() changed = new EventEmitter<string>();
  @Output() opened = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  @ViewChild('input', { read: ElementRef, static: true }) input!: ElementRef<HTMLInputElement>;

  readonly open = signal<boolean>(false);

  selectedDate = new Date();

  ngOnInit(): void {
    if (this.control.value) {
      this.selectedDate = new Date(this.control.value);
    }
    this.displayCalendar();
  }

  ngAfterViewInit(): void {
    //     let display = document.querySelector('.display');
    //     let days = document.querySelector('.days');
    //     let previous = document.querySelector('.left');
    //     let next = document.querySelector('.right');
    //     let selected = document.querySelector('.selected');
    //
    //     let date = new Date();
    //
    //     let year = date.getFullYear();
    //     let month = date.getMonth();
    //
    //
    // // Call the function to display the calendar
    //     displayCalendar();
    //
    //     previous.addEventListener('click', () => {
    //       days.innerHTML = '';
    //       selected.innerHTML = '';
    //
    //       if (month < 0) {
    //         month = 11;
    //         year = year - 1;
    //       }
    //
    //       month = month - 1;
    //
    //       date.setMonth(month);
    //
    //       displayCalendar();
    //       displaySelected();
    //     });
    //
    //     next.addEventListener('click', () => {
    //       days.innerHTML = '';
    //       selected.innerHTML = '';
    //
    //       if (month > 11) {
    //         month = 0;
    //         year = year + 1;
    //       }
    //
    //       month = month + 1;
    //       date.setMonth(month);
    //
    //       displayCalendar();
    //       displaySelected();
    //     });
    //
    //     function displaySelected() {
    //       const dayElements = document.querySelectorAll('.days div');
    //       dayElements.forEach((day) => {
    //         day.addEventListener('click', (e) => {
    //           const selectedDate = e.target.dataset.date;
    //           selected.innerHTML = `Selected Date : ${selectedDate}`;
    //         });
    //       });
    //     }
    //     displaySelected();
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

  onSelect(option: any): void {
    this.control.patchValue(option, { emitEvent: false });
    this.closed.emit();
    this.open.set(false);
  }

  private displayCalendar() {
    const currentDate = this.control.value ? new Date(this.control.value) : new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);

    const firstDayIndex = firstDay.getDay(); //4
    const numberOfDays = lastDay.getDate(); //31

    console.log(firstDayIndex, numberOfDays);

    // for (let x = 1; x <= firstDayIndex; x++) {
    //   const div = document.createElement('div');
    //   div.innerHTML += '';
    //
    //   days.appendChild(div);
    // }
    //
    // for (let i = 1; i <= numberOfDays; i++) {
    //   const div = document.createElement('div');
    //   const currentDate = new Date(year, month, i);
    //
    //   div.dataset.date = currentDate.toDateString();
    //
    //   div.innerHTML += i;
    //   days.appendChild(div);
    //   if (
    //     currentDate.getFullYear() === new Date().getFullYear() &&
    //     currentDate.getMonth() === new Date().getMonth() &&
    //     currentDate.getDate() === new Date().getDate()
    //   ) {
    //     div.classList.add('current-date');
    //   }
    // }
  }
}
