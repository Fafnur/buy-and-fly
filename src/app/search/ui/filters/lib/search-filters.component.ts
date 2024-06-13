import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { startWith, tap, withLatestFrom } from 'rxjs';

import { castQueryParams } from '@baf/core';
import { ButtonComponent } from '@baf/ui/buttons';

@Component({
  selector: 'baf-search-filters',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly form = input.required<FormGroup>();

  ngOnInit(): void {
    const formData = castQueryParams(this.activatedRoute.snapshot.queryParams, Object.keys(this.form().controls));

    if (Object.keys(formData).length) {
      this.form().patchValue(formData);
    }

    this.form()
      .valueChanges.pipe(
        startWith({}),
        withLatestFrom(this.activatedRoute.queryParams),
        tap(([queryParams, baseQueryParams]) =>
          this.router.navigate([], {
            queryParams: castQueryParams({
              ...baseQueryParams,
              ...queryParams,
            }),
          }),
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  onReset(): void {
    this.form().reset();
  }
}
