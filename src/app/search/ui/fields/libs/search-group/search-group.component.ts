import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';

import { ExtraClassService, toClass } from '@baf/core';

export type SearchGroupType = 'destination' | 'date' | 'line' | 'submit' | 'single' | undefined;

@Component({
  selector: 'baf-search-group',
  standalone: true,
  imports: [],
  template: '<ng-content/>',
  styleUrl: './search-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService],
})
export class SearchGroupComponent {
  private readonly extraClassService = inject(ExtraClassService);

  readonly mode = input<SearchGroupType, SearchGroupType>(undefined, {
    transform: (value) => {
      this.extraClassService.update('mode', toClass(value));

      return value;
    },
  });
}
