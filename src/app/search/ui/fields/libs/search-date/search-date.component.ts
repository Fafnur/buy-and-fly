import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormControl } from '@angular/forms';
import { merge, switchMap } from 'rxjs';

import { ExtraClassDirective } from '@baf/core';
import { DatepickerComponent } from '@baf/ui/datepicker';

export interface SearchDateOptions {
  readonly label: string;
  readonly placeholder?: string;
  readonly id: string;
  readonly startDate?: FormControl<string>;
}

@Component({
  selector: 'baf-search-date',
  standalone: true,
  imports: [DatepickerComponent],
  templateUrl: './search-date.component.html',
  styleUrl: './search-date.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: ExtraClassDirective,
      inputs: ['extra: control'],
    },
  ],
})
export class SearchDateComponent {
  readonly control = input.required<FormControl<string>>();
  readonly options = input.required<SearchDateOptions>();

  constructor() {
    const extra = inject(ExtraClassDirective);
    extra.styleFn = () => {
      const styles: string[] = [];
      if (this.options().startDate?.invalid) {
        styles.push('is-hide');
      }
      if (this.control().valid) {
        styles.push('is-valid');
      }
      if (this.options().id === 'startDate') {
        styles.push('is-start-date');
      }
      if (this.options().id === 'endDate') {
        styles.push('is-end-date');
      }

      return styles;
    };
    extra.valueChanges = merge(toObservable(this.control), toObservable(this.options)).pipe(
      switchMap((controlOrOptions) => {
        if (!(controlOrOptions instanceof FormControl) && controlOrOptions.startDate) {
          return merge(this.control().valueChanges, controlOrOptions.startDate.valueChanges);
        }

        return this.control().valueChanges;
      }),
    );
  }
}
