import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import type { FormControl } from '@angular/forms';

import { camelCaseToHumanize, ExtraClassService } from '@baf/core';
import type { SearchFieldOptions } from '@baf/search/common';
import type { DatepickerOptions } from '@baf/ui/datepicker';
import { DatepickerComponent } from '@baf/ui/datepicker';

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

  readonly options = input.required<DatepickerOptions, SearchDateOptions>({
    transform: (value) => {
      this.extraClassService.update('options', value.id ? `is-${camelCaseToHumanize(value.id)}` : '');

      if (value.startDate) {
        this.extraClassService.register('invalid', value.startDate.valueChanges, () => {
          this.extraClassService.patch('is-hide', !!value.startDate?.invalid);
        });
      }

      return {
        ...value,
        mask: '00.00.0000',
        maskTo: (val: string) => {
          const [year, month, day] = val.split('-');

          return `${day}.${month}.${year}`;
        },
        maskForm: (val: string) => {
          const [day, month, year] = val.split('.');

          return `${year}-${month}-${day}`;
        },
      };
    },
  });
}
