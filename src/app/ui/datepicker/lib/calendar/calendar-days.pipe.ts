import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendarDays',
  standalone: true,
})
export class CalendarDaysPipe implements PipeTransform {
  transform(days: number): number[] {
    return Array.from({ length: days }, (v, k) => k + 1);
  }
}
