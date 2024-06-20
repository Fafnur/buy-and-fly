import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SearchAviaCashbaskPipe } from './search-avia-cashbask.pipe';

@Component({
  selector: 'baf-search-avia-price',
  standalone: true,
  imports: [CurrencyPipe, SearchAviaCashbaskPipe],
  templateUrl: './search-avia-price.component.html',
  styleUrl: './search-avia-price.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchAviaPriceComponent {
  readonly price = input.required<number>();
}
