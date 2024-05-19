import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormComponent } from '@baf/search/ui';
import { ContainerComponent } from '@baf/ui/container';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [SearchFormComponent, ContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
