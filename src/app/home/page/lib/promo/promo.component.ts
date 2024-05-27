import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormComponent } from '@baf/search/ui/form';
import { SearchMenuComponent } from '@baf/search/ui/menu';
import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-promo',
  standalone: true,
  imports: [SearchFormComponent, SearchMenuComponent, HeadlineComponent],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {}
