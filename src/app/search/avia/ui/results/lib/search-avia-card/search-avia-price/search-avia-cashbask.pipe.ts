import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'searchAviaCashback',
  standalone: true,
})
export class SearchAviaCashbaskPipe implements PipeTransform {
  transform(price: number): number {
    return price / 10;
  }
}
