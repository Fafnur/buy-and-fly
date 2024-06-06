import { DestroyRef, Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';

import { StyleFn } from '../form/form';

@Directive({
  selector: '[bafExtraClass]',
  standalone: true,
})
export class ExtraClassDirective implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly render = inject(Renderer2);
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  readonly extra = input.required<unknown>();

  valueChanges?: Observable<unknown>;

  styleFn?: StyleFn;

  private lastStyles: string | string[] | undefined;

  constructor() {
    toObservable(this.extra)
      .pipe(
        tap(() => this.update()),
        takeUntilDestroyed(),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.valueChanges
      ?.pipe(
        tap(() => {
          console.log('valueChanges');
          this.update();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  private update(): void {
    if (!this.styleFn) {
      return;
    }
    const styles = this.styleFn(this.extra());

    if (this.lastStyles) {
      if (Array.isArray(this.lastStyles)) {
        this.lastStyles.map((style) => this.render.removeClass(this.elementRef.nativeElement, style));
      } else {
        this.render.removeClass(this.elementRef.nativeElement, this.lastStyles);
      }
    }
    if (Array.isArray(styles)) {
      styles.map((style) => this.render.addClass(this.elementRef.nativeElement, style));
    } else {
      this.render.addClass(this.elementRef.nativeElement, styles);
    }
    this.lastStyles = styles;
  }
}
