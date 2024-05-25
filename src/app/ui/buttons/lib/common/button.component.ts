import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective } from '@baf/ui/utils';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[baf-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['mode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['size'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class ButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[baf-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'baf-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['mode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['size'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class AnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
