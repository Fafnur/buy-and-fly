import { Directive, ElementRef, forwardRef, HostListener, inject, InjectionToken, input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ChangeFn, TouchedFn } from '@baf/core';

export const INPUT_MASK_VALUES = new InjectionToken<Record<string, RegExp>>('INPUT_MASK_VALUES');

// eslint-disable-next-line @typescript-eslint/naming-convention
const DEFAULT_INPUT_MASK_VALUES: Record<string, RegExp> = { 0: /[0-9]/, a: /[a-z]/, A: /[A-Z]/, B: /[a-zA-Z]/ };

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'input[formControlName][mask],input[formControl][mask]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputMaskDirective),
      multi: true,
    },
  ],
})
export class InputMaskDirective implements ControlValueAccessor, OnInit {
  private readonly maskValues = inject(INPUT_MASK_VALUES, { optional: true }) ?? DEFAULT_INPUT_MASK_VALUES;
  private readonly elementRef = inject(ElementRef<HTMLInputElement>);

  private lastValue?: string;

  private readonly maskFormats = `(${Object.keys(this.maskValues)
    .map((key) => {
      const regexStr = this.maskValues[key].toString();

      return regexStr.substring(1, regexStr.length - 1);
    })
    .join('|')})`;

  readonly mask = input.required<string>();

  onChange!: ChangeFn;
  onTouched!: TouchedFn;

  registerOnChange(fn: ChangeFn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: TouchedFn): void {
    this.onTouched = fn;
  }

  writeValue(value: string | undefined | null): void {
    this.elementRef.nativeElement.value = this.getMaskedValue(value);
  }

  @HostListener('blur') onBlur(): void {
    this.onTouched();
  }

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.elementRef.nativeElement.value = this.getMaskedValue(value);
    this.onChange(value);
  }

  ngOnInit(): void {
    if (!this.mask) {
      console.warn(`Property mask should not be empty for input:`, this.elementRef.nativeElement);
    }
  }

  getMaskedValue(value: string | undefined | null): string | undefined | null {
    if (!this.mask || !value || value === this.lastValue) {
      return value;
    }

    const masked = this.valueToFormat(value, this.mask(), this.lastValue ? this.lastValue.length > value.length : false, this.lastValue);
    this.lastValue = masked;

    return masked;
  }

  /**
   * @see https://gist.github.com/rami-alloush/3ee792fd0647b73de5f863a2719c78c6
   */
  private valueToFormat(value: string, format: string, goingBack?: boolean, prevValue?: string): string {
    let maskedValue = '';
    const unmaskedValue = value.replace(' ', '').match(new RegExp(this.maskFormats, 'g'))?.join('') ?? '';

    const formats = new RegExp(this.maskFormats);
    const isLastCharFormatter = !formats.test(value[value.length - 1]);
    const isPrevLastCharFormatter = prevValue && !formats.test(prevValue[prevValue.length - 1]);

    let formatOffset = 0;
    for (let index = 0, max = Math.min(unmaskedValue.length, format.length); index < max; ++index) {
      const valueChar = unmaskedValue[index];
      let formatChar = format[formatOffset + index];
      let formatRegex = this.maskValues[formatChar];

      if (formatChar && !formatRegex) {
        maskedValue += formatChar;
        formatChar = format[++formatOffset + index];
        formatRegex = this.maskValues[formatChar];
      }

      if (valueChar && formatRegex) {
        if (formatRegex && formatRegex.test(valueChar)) {
          maskedValue += valueChar;
        } else {
          break;
        }
      }

      const nextFormatChar = format[formatOffset + index + 1];
      const nextFormatRegex = this.maskValues[nextFormatChar];
      const isLastIteration = index === max - 1;

      if (isLastIteration && nextFormatChar && !nextFormatRegex) {
        if (!isLastCharFormatter && goingBack) {
          if (prevValue && !isPrevLastCharFormatter) {
            continue;
          }
          maskedValue = maskedValue.substring(0, formatOffset + index);
        } else {
          maskedValue += nextFormatChar;
        }
      }
    }

    return maskedValue;
  }
}
