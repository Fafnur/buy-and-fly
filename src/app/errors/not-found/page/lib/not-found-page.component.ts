import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ErrorsLinkComponent } from '@baf/errors/ui/links';
import { ContainerComponent } from '@baf/ui/container';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-not-found-page',
  standalone: true,
  imports: [ContainerComponent, HeadlineComponent, TitleComponent, ErrorsLinkComponent],
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
