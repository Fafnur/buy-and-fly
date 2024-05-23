import { DatePipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

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
}

@Component({
  selector: 'baf-calendar',
  standalone: true,
  imports: [DatePipe, NgForOf, CalendarDaysPipe, IconButtonComponent, ChevronLeftComponent, ChevronRightComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  @Input() set startDate(date: string | null | undefined) {
    const startDate = date ? new Date(date) : new Date();
    this.config = this.getConfig(startDate, startDate.getDate());
  }

  @Output() selected = new EventEmitter<CalendarSelected>();

  config: CalendarConfig = this.getConfig();

  getConfig(date?: string | Date, active?: number): CalendarConfig {
    const currentDate = date ? new Date(date) : new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    return {
      date: currentDate,
      year,
      month,
      firstDay: new Date(year, month, 1),
      lastDay: new Date(year, month + 1, 0),
      active,
    };
  }

  onPrev(): void {
    let { month, year } = this.config;
    if (month < 0) {
      month = 11;
      year = year - 1;
    }
    month = month - 1;

    this.config = this.getConfig(new Date(year, month, 1), this.config.active);
  }

  onNext(): void {
    let { month, year } = this.config;
    if (month > 11) {
      month = 0;
      year = year + 1;
    }
    month = month + 1;

    this.config = this.getConfig(new Date(year, month, 1), this.config.active);
  }

  onSelect(day: number): void {
    const date = new Date(this.config.year, this.config.month, day);
    this.config = this.getConfig(date, day);
    this.selected.emit({ day, date });
  }
}
