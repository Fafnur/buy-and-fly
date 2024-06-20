import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';

@Component({
  selector: 'baf-development-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent],
  templateUrl: './development-page.component.html',
  styleUrl: './development-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DevelopmentPageComponent {}
