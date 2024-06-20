import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

import { castQueryParams, getRoute, PathValues } from '@baf/core';
import { getSearchQueryParams } from '@baf/search/common';
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
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = input.required<FormGroup>();
  readonly redirectTo = input.required<PathValues>();
  readonly name = input<string | undefined>(undefined);
  readonly submitted = output();

  ngOnInit(): void {
    this.activatedRoute.queryParams
      .pipe(
        tap((queryParams) => {
          const formData = castQueryParams(queryParams, Object.keys(this.form().controls));
          if (Object.keys(formData).length) {
            this.form().patchValue(formData);
          }
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

    // Note: Auto redirect
    void this.router.navigate(getRoute(this.redirectTo()), {
      queryParams: getSearchQueryParams({ ...this.activatedRoute.snapshot.queryParams, ...this.form().getRawValue() }, this.name()),
    });
  }
}
