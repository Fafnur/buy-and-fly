import { DatePipe, NgForOf } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CalendarDaysPipe } from './calendar-days.pipe';

export interface CalendarConfig {
  readonly date: Date;
  readonly firstDay: Date;
  readonly lastDay: Date;
  readonly year: number;
  readonly month: number;
}

@Component({
  selector: 'baf-calendar',
  standalone: true,
  imports: [DatePipe, NgForOf, CalendarDaysPipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) control!: FormControl<string>;

  @ViewChild('days', { read: ElementRef, static: true }) days!: ElementRef<HTMLDivElement>;

  selectedDate = new Date();

  config: CalendarConfig = this.getConfig();

  ngOnInit(): void {
    if (this.control.value) {
      this.selectedDate = new Date(this.control.value);
    }

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

  ngAfterViewInit(): void {}

  onPrev(): void {
    //       days.innerHTML = '';
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
  }

  onNext(): void {
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
  }

  private getConfig(date?: string | Date): CalendarConfig {
    const currentDate = date ? new Date(date) : new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);

    const lastDay = new Date(year, month + 1, 0);
    // const firstDayIndex = firstDay.getDay(); //4
    // const numberOfDays = lastDay.getDate(); //31

    return {
      date: currentDate,
      year,
      month,
      firstDay,
      lastDay,
    };
  }

  // private displayCalendar() {
  //   for (let x = 1; x <= firstDayIndex; x++) {
  //     const div = this.document.createElement('div');
  //     div.innerHTML += '';
  //
  //     this.days.nativeElement.appendChild(div);
  //   }
  //
  //   for (let i = 1; i <= numberOfDays; i++) {
  //     const div = document.createElement('div');
  //     const date = new Date(year, month, i);
  //
  //     div.dataset['date'] = date.toDateString();
  //
  //     div.innerHTML += i;
  //     this.days.nativeElement.appendChild(div);
  //     if (
  //       date.getFullYear() === new Date().getFullYear() &&
  //       date.getMonth() === new Date().getMonth() &&
  //       date.getDate() === new Date().getDate()
  //     ) {
  //       div.classList.add('current-date');
  //     }
  //   }
  // }
}
