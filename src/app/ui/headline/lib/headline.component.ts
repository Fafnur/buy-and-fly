import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@baf/ui/utils';

@Component({
  selector: 'baf-headline,[baf-headline],[bafHeadline]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './headline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-headline',
  },
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['bafSize'],
    },
    {
      directive: AlignDirective,
      inputs: ['bafAlign'],
    },
  ],
})
export class HeadlineComponent {}
