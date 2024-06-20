import { Directive } from '@angular/core';

@Directive({
  selector: '[bafInputPrefix]',
  standalone: true,
  host: {
    class: 'input-prefix',
    '[style.margin-left]': '"12px"',
  },
})
export class InputPrefixDirective {}
