import { Directive, output } from '@angular/core';

@Directive({
  selector: '[bafSearchFilter]',
  standalone: true,
})
export class SearchFilterDirective {
  readonly clear = output<void>();
}
