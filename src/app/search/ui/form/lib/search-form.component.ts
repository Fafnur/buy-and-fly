import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

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
export class SearchFormComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = input.required<FormGroup>();
  readonly submitted = output();

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        tap((queryParams) => {
          this.form().patchValue(queryParams);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onSubmit(): void {
    this.form().markAllAsTouched();

    if (this.form().invalid) {
      return;
    }
    this.submitted.emit();
  }
}
