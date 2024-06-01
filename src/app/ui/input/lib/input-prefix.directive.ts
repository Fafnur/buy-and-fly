import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[input-prefix]',
  standalone: true,
  /* eslint-disable @typescript-eslint/naming-convention */
  host: {
    class: 'input-prefix',
    '[style.margin-left]': '"12px"',
  },
})
export class InputPrefixDirective {}
