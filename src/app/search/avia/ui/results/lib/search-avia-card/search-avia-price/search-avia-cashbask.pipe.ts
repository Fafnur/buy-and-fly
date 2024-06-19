import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchAviaCashback',
  standalone: true,
})
export class SearchAviaCashbaskPipe implements PipeTransform {
  transform(price: number): number {
    return price / 10;
  }
}
