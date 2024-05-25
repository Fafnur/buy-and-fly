import { Directive, ElementRef, forwardRef, HostListener, inject, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ChangeFn, DisplayFn, TouchedFn } from '@baf/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[formControlName][display],input[formControl][display]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputDisplayDirective),
      multi: true,
    },
  ],
})
export class InputDisplayDirective implements ControlValueAccessor {
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  @Input({ required: true }) display!: DisplayFn;

  onChange!: ChangeFn;
  onTouched!: TouchedFn;

  registerOnChange(fn: ChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  writeValue(value: any): void {
    this.elementRef.nativeElement.value = this.display(value);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.elementRef.nativeElement.value = this.display(value);
    this.onChange(value);
  }
}
