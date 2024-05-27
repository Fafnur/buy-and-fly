import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormComponent } from '@baf/search/ui/form';
import { SearchTabsComponent } from 'src/app/search/ui/tabs';
import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-promo',
  standalone: true,
  imports: [SearchFormComponent, SearchTabsComponent, HeadlineComponent],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoComponent {}
