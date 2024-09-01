import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@baf/core';
import { AnchorComponent } from '@baf/ui/buttons';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-traveling',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, AnchorComponent, RouterLink, PathPipe],
  templateUrl: './traveling.component.html',
  styleUrl: './traveling.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravelingComponent {
  readonly paths = PATHS;
}
