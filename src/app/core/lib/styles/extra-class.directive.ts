import { Directive, ElementRef, inject, input, Renderer2, Signal } from '@angular/core';

export interface WithExtraClass {
  readonly extraClass: Signal<string | undefined>;
}

@Directive({
  selector: '[bafExtraClass]',
  standalone: true,
})
export class ExtraClassDirective {
  private readonly render = inject(Renderer2);
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  readonly extra = input.required<unknown, unknown>({
    transform: (value: unknown) => {
      console.log(value);
      if (typeof value === 'string' && value) {
        value.split('.').map((element) => this.render.addClass(this.elementRef.nativeElement, element));
      }

      return value;
    },
  });
}
