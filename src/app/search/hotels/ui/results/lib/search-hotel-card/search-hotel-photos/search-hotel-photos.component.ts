import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, inject, input } from '@angular/core';

import { SearchHotel } from '@baf/search/hotels/common';

@Component({
  selector: 'baf-search-hotel-photos',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage],
  templateUrl: './search-hotel-photos.component.html',
  styleUrl: './search-hotel-photos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelPhotosComponent {
  private readonly elementRef = inject(ElementRef);

  readonly searchHotel = input.required<SearchHotel>();

  onSwipeLeft(): void {
    this.elementRef.nativeElement.scrollTo({ left: this.elementRef.nativeElement.scrollLeft + 320, behavior: 'smooth' });
  }

  onSwipeRight(): void {
    this.elementRef.nativeElement.scrollTo({ left: this.elementRef.nativeElement.scrollLeft - 320, behavior: 'smooth' });
  }
}
