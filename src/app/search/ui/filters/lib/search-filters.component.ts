import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  readonly form = input.required<FormGroup>();

  ngOnInit(): void {
    // this.form()
    //   .valueChanges.pipe(
    //     tap((value) => console.log(value)),
    //     takeUntilDestroyed(this.destroyRef),
    //   )
    //   .subscribe();
  }

  onReset(): void {
    this.form().reset();
  }
}
