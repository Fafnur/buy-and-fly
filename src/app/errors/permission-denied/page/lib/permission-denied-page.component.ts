import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ErrorsLinkComponent } from '@baf/errors/ui/links';
import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-permission-denied-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent, TitleComponent, ErrorsLinkComponent],
  templateUrl: './permission-denied-page.component.html',
  styleUrls: ['./permission-denied-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PermissionDeniedPageComponent {}
