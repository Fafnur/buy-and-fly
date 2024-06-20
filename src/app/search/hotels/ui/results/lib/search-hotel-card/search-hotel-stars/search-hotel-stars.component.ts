import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'baf-search-hotel-stars',
  standalone: true,
  imports: [],
  templateUrl: './search-hotel-stars.component.html',
  styleUrl: './search-hotel-stars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchHotelStarsComponent {
  readonly stars = input.required<number[], number>({
    transform: (value) => Array.from({ length: value }, (_, index) => index + 1),
  });
}
