import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { camelCaseToHumanize, ExtraClassService } from '@baf/core';
import { DatepickerComponent } from '@baf/ui/datepicker';
import { SearchFieldOptions } from '@baf/search/common';

export interface SearchDateOptions extends SearchFieldOptions {
  readonly startDate?: FormControl<string>;
}

@Component({
  selector: 'baf-search-date',
  standalone: true,
  imports: [DatepickerComponent],
  templateUrl: './search-date.component.html',
  styleUrl: './search-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ExtraClassService],
})
export class SearchDateComponent {
  private readonly extraClassService = inject(ExtraClassService);

  readonly control = input.required<FormControl<string>, FormControl<string>>({
    transform: (value) => {
      this.extraClassService.register('valid', value.valueChanges, () => {
        this.extraClassService.patch('is-valid', value.valid);
      });

      return value;
    },
  });

  readonly options = input.required<SearchDateOptions, SearchDateOptions>({
    transform: (value) => {
      this.extraClassService.update('options', value.id ? `is-${camelCaseToHumanize(value.id)}` : '');

      if (value.startDate) {
        this.extraClassService.register('invalid', value.startDate.valueChanges, () => {
          this.extraClassService.patch('is-hide', !!value.startDate?.invalid);
        });
      }

      return value;
    },
  });
}
