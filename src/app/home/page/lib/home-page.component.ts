import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormComponent } from '@baf/search/ui/form';
import { SearchMenuComponent } from '@baf/search/ui/menu';
import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [SearchFormComponent, SearchMenuComponent, ContainerComponent, HeadlineComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
