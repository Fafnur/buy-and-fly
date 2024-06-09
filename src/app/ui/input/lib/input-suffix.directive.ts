import { Directive } from '@angular/core';

@Directive({
  selector: '[bafInputSuffix]',
  standalone: true,
  host: {
    class: 'baf-input-suffix',
    '[style.margin-right]': '"12px"',
  },
})
export class InputSuffixDirective {}
