import { ChangeDetectionStrategy, Component } from '@angular/core';

import { DisabledDirective, ExtraSizeDirective, ModeDirective, WidthDirective } from '@baf/ui/utils';

import { AnchorBase, ButtonBase } from '../base/button-base';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[baf-button]',
  standalone: true,
  template: '<ng-content />',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-button',
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
    {
      directive: WidthDirective,
      inputs: ['bafWidth'],
    },
  ],
})
export class ButtonComponent extends ButtonBase {}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[baf-button]',
  standalone: true,
  template: '<ng-content />',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-button',
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
    {
      directive: WidthDirective,
      inputs: ['bafWidth'],
    },
  ],
})
export class AnchorComponent extends AnchorBase {}
