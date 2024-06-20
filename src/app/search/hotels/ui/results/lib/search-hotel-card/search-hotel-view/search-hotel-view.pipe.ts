import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { SearchHotel } from '@baf/search/hotels/common';

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
