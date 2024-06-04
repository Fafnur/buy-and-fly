import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';

@Component({
  selector: 'baf-search-layout',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent],
  templateUrl: './search-layout.component.html',
  styleUrl: './search-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchLayoutComponent {}
