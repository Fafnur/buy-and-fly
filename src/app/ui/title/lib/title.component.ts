import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@baf/ui/utils';

@Component({
  selector: 'baf-title,[baf-title]',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-title',
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
export class TitleComponent {}
