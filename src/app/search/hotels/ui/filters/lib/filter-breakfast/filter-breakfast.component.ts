import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@baf/core';
import { SearchFieldOptions } from '@baf/search/common';
import { CheckboxComponent } from '@baf/ui/checkbox';

export type FilterBaggageOptions = SearchFieldOptions;

@Component({
  selector: 'baf-filter-breakfast',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-breakfast.component.html',
  styleUrl: './filter-breakfast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterBreakfastComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterBaggageOptions>();
}
