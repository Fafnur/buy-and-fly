import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@baf/core';
import { AnchorComponent } from '@baf/ui/buttons';
import { CardComponent } from '@baf/ui/cards';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-connect',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, CardComponent, AnchorComponent, RouterLink, PathPipe],
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConnectComponent {
  readonly paths = PATHS;
}
