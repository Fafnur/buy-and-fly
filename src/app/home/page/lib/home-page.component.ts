import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SearchFormComponent } from '@baf/search/ui/form';
import { ContainerComponent } from '@baf/ui/container';

@Component({
  selector: 'baf-home-page',
  standalone: true,
  imports: [ContainerComponent, SearchFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
