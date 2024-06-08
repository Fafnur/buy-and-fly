import { Directive, inject, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[bafSearchFilter]',
  standalone: true,
})
export class SearchFilterDirective {
  private readonly activatedRoute = inject(ActivatedRoute);

  readonly clear = output<void>();

  apply<T extends object>(filter: T): void {
    // TODO: Adding filter to url
    console.log(this.activatedRoute.snapshot.queryParams);
  }
}
