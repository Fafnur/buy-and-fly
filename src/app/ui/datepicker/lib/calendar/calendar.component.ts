import { AsyncPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { IconButtonComponent } from '@baf/ui/buttons';
import { ChevronLeftComponent, ChevronRightComponent } from '@baf/ui/icons';

import { CalendarDaysPipe } from './calendar-days.pipe';

export interface CalendarConfig {
  readonly date: Date;
  readonly firstDay: Date;
  readonly lastDay: Date;
  readonly year: number;
  readonly month: number;
  readonly active?: number;
}

export interface CalendarSelected {
  readonly day: number;
  readonly date: Date;
  readonly format: string;
}

@Component({
  selector: 'baf-calendar',
  standalone: true,
  imports: [DatePipe, CalendarDaysPipe, IconButtonComponent, ChevronLeftComponent, ChevronRightComponent, AsyncPipe],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  readonly startDate = input.required<Date, string | null | undefined>({
    transform: (date) => {
      let startDate: Date;
      if (date && date.length === 10) {
        startDate = new Date(date);
      } else {
        startDate = new Date();
      }

      this.config = this.getConfig(startDate, startDate.getDate());

      return startDate;
    },
  });

  readonly selected = output<CalendarSelected>();

  config: CalendarConfig = this.getConfig();

  getConfig(date?: string | Date, active?: number): CalendarConfig {
    const selectedDate = date ? new Date(date) : new Date();
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    return {
      date: selectedDate,
      year,
      month,
      firstDay: new Date(year, month, 1),
      lastDay: new Date(year, month + 1, 0),
      active: active,
    };
  }

  onPrev(): void {
    let { month, year } = this.config;
    if (month < 0) {
      month = 11;
      year = year - 1;
    }
    month = month - 1;

    this.config = this.getConfig(new Date(year, month, 1));
  }

  onNext(): void {
    let { month, year } = this.config;
    if (month > 11) {
      month = 0;
      year = year + 1;
    }
    month = month + 1;

    this.config = this.getConfig(new Date(year, month, 1));
  }

  onSelect(day: number): void {
    const date = new Date(this.config.year, this.config.month, day);
    this.config = this.getConfig(date, day);

    const res = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };

    this.selected.emit({
      day,
      date,
      format: `${res.year}-${res.month.toString().padStart(2, '0')}-${res.day.toString().padStart(2, '0')}`,
    });
  }
}
