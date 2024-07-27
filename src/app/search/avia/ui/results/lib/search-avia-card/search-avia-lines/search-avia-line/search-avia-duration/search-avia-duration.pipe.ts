import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'searchAviaDuration',
  standalone: true,
})
export class SearchAviaDurationPipe implements PipeTransform {
  readonly h = $localize`:Search Avia Time:h`;
  readonly m = $localize`:Search Avia Time:m`;

  transform(duration: number): string {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;

    return `${hours ? `${hours}${this.h} ` : ''}${minutes.toString().padStart(2, '0')}${this.m}`;
  }
}
