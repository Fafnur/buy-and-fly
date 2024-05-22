import { Directive } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[baf-input-prefix]',
  standalone: true,
  /* eslint-disable @angular-eslint/no-host-metadata-property,@typescript-eslint/naming-convention */
  host: {
    class: 'baf-input-prefix',
    '[style.margin-left]': '"12px"',
  },
})
export class InputPrefixDirective {}
