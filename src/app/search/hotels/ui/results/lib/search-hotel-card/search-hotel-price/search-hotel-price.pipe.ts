import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'searchHotelPrice',
  standalone: true,
})
export class SearchHotelPricePipe implements PipeTransform {
  transform(price: number, days: number): number {
    return Math.round(price / days);
  }
}
