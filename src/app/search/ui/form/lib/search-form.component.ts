import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SearchGroupComponent } from '@baf/search/ui/fields';
import { ButtonComponent } from '@baf/ui/buttons';

@Component({
  selector: 'baf-search-form',
  standalone: true,
  imports: [SearchGroupComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFormComponent {
  readonly form = input.required<FormGroup>();
  readonly submitted = signal<boolean>(false);

  onSubmit(): void {
    this.form().markAllAsTouched();

    if (this.form().invalid) {
      return;
    }
    this.submitted.set(true);
  }
}
