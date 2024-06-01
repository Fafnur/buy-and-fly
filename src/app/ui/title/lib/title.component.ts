import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AlignDirective, SizeDirective } from '@baf/ui/utils';

@Component({
  selector: 'baf-title,[baf-title],[bafTitle]',
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
      inputs: ['bafSize'],
    },
    {
      directive: AlignDirective,
      inputs: ['bafAlign'],
    },
  ],
})
export class TitleComponent {}
