import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '@baf/ui/container';

@Component({
  selector: 'baf-footer',
  standalone: true,
  imports: [RouterLink, ContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
