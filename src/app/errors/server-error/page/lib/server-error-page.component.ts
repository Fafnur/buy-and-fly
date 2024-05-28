import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ErrorsLinkComponent } from '@baf/errors/ui/links';
import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-server-error-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent, TitleComponent, ErrorsLinkComponent],
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerErrorPageComponent {}
