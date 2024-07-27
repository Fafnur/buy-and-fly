import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@baf/core';
import type { SearchFieldOptions } from '@baf/search/common';
import { CheckboxComponent } from '@baf/ui/checkbox';

export type FilterBaggageOptions = SearchFieldOptions;

@Component({
  selector: 'baf-filter-five-stars',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-five-stars.component.html',
  styleUrl: './filter-five-stars.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterFiveStarsComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterBaggageOptions>();
}
