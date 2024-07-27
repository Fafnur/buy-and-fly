import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import type { SafeUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

import type { SearchHotel } from '@baf/search/hotels/common';

@Pipe({
  name: 'searchHotelView',
  standalone: true,
})
export class SearchHotelViewPipe implements PipeTransform {
  private domSanitizer = inject(DomSanitizer);

  transform(hotel: SearchHotel): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(`https://www.google.com/maps/search/?api=1&query=${hotel.hotelName}`);
  }
}
