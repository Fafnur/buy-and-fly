import { Directive, ElementRef, forwardRef, inject, input } from '@angular/core';
import type { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import type { ChangeFn, DisplayFn, TouchedFn } from '@baf/core';

@Directive({
  selector: 'input[formControlName][bafInputDisplay],input[formControl][bafInputDisplay]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDisplayDirective),
      multi: true,
    },
  ],
  host: {
    '(blur)': 'onTouched()',
    '(input)': 'onInput($event)',
  },
})
export class InputDisplayDirective implements ControlValueAccessor {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);
  readonly display = input.required<DisplayFn>({ alias: 'bafInputDisplay' });

  onChange!: ChangeFn;
  onTouched!: TouchedFn;

  registerOnChange(fn: ChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  writeValue(value: unknown): void {
    this.elementRef.nativeElement.value = this.display()(value);
  }

  onInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.elementRef.nativeElement.value = this.display()(value);
    this.onChange(value);
  }
}
