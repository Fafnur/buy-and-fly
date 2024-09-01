import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardComponent } from '@baf/ui/cards';
import { HeadlineComponent } from '@baf/ui/headline';
import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-convenient-with-us',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent, HeadlineComponent, CardComponent, NgOptimizedImage],
  templateUrl: './convenient-with-us.component.html',
  styleUrl: './convenient-with-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConvenientWithUsComponent {}
