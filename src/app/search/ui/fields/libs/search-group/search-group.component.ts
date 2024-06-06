import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { ExtraClassDirective } from '@baf/core';

export type SearchGroupType = 'destination' | 'date' | 'line' | 'submit' | 'single' | undefined;

@Component({
  selector: 'baf-search-group',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './search-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtraClassDirective,
      inputs: ['extra: mode'],
    },
  ],
})
export class SearchGroupComponent {
  readonly mode = input<SearchGroupType>();

  constructor() {
    inject(ExtraClassDirective).styleFn = (value: SearchGroupType) => (value ? `is-${value}` : '');
  }
}
