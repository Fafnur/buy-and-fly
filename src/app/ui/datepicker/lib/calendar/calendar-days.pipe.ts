import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'calendarDays',
  standalone: true,
})
export class CalendarDaysPipe implements PipeTransform {
  transform(days: number): number[] {
    return Array.from({ length: days }, (v, k) => k + 1);
  }
}
