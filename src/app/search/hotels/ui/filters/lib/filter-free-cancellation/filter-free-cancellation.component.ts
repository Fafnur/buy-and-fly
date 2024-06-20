import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@baf/core';
import { SearchFieldOptions } from '@baf/search/common';
import { CheckboxComponent } from '@baf/ui/checkbox';

export type FilterDirectOptions = SearchFieldOptions;

@Component({
  selector: 'baf-filter-free-cancellation',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-free-cancellation.component.html',
  styleUrl: './filter-free-cancellation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterFreeCancellationComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterDirectOptions>();
}
