import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[baf-input-suffix]',
  standalone: true,
  /* eslint-disable @angular-eslint/no-host-metadata-property,@typescript-eslint/naming-convention */
  host: {
    class: 'baf-input-suffix',
    '[style.margin-right]': '"12px"',
  },
})
export class InputSuffixDirective {}
