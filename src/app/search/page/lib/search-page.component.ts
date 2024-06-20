import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';

@Component({
  selector: 'baf-search-page',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {}
