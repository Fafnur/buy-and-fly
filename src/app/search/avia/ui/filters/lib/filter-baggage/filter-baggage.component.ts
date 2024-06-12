import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ExtractChangesDirective } from '@baf/core';
import { SearchFieldOptions } from '@baf/search/common';
import { CheckboxComponent } from '@baf/ui/checkbox';

export interface FilterBaggageOptions extends SearchFieldOptions {
  readonly name?: string;
}

@Component({
  selector: 'baf-filter-baggage',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './filter-baggage.component.html',
  styleUrl: './filter-baggage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtractChangesDirective,
      inputs: ['control'],
    },
  ],
})
export class FilterBaggageComponent {
  readonly control = input.required<FormControl<boolean>>();
  readonly options = input.required<FilterBaggageOptions>();
}
