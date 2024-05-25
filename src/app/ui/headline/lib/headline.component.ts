import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@baf/ui/utils';

@Component({
  selector: 'baf-headline,[baf-headline]',
  standalone: true,
  template: '<ng-content></ng-content>',
  styleUrl: './headline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-headline',
  },
  hostDirectives: [
    {
      directive: SizeDirective,
      inputs: ['size'],
    },
    {
      directive: AlignDirective,
      inputs: ['align'],
    },
  ],
})
export class HeadlineComponent {}
