import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@baf/core';
import { SearchFieldOptions } from '@baf/search/common';
import { CheckboxComponent } from '@baf/ui/checkbox';

export type FilterDirectOptions = SearchFieldOptions;

@Component({
  selector: 'baf-filter-direct',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-direct.component.html',
  styleUrl: './filter-direct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterDirectComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterDirectOptions>();
}
