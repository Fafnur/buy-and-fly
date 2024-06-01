import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective } from '@baf/ui/utils';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[baf-icon-button]',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-icon-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['bafMode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['bafSize'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class IconButtonComponent extends ButtonBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[baf-icon-button]',
  standalone: true,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-icon-button',
  },
  hostDirectives: [
    {
      directive: ModeDirective,
      inputs: ['bafMode'],
    },
    {
      directive: ExtraSizeDirective,
      inputs: ['bafSize'],
    },
    {
      directive: DisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class IconAnchorComponent extends AnchorBase {
  constructor(elementRef: ElementRef) {
    super(elementRef);
  }
}
