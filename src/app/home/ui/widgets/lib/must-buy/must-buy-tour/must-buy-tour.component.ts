import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TitleComponent } from '@baf/ui/title';

@Component({
  selector: 'baf-must-buy-tour',
  standalone: true,
  imports: [NgOptimizedImage, TitleComponent],
  templateUrl: './must-buy-tour.component.html',
  styleUrl: './must-buy-tour.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MustBuyTourComponent {}
