import { DestroyRef, ElementRef, inject, Injectable, Renderer2 } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs';

type Styles = string | string[] | undefined | null;

export function toClass(value: unknown | undefined | null, prefix = 'is'): Styles {
  return value ? `${prefix}-${value}` : undefined;
}

@Injectable()
export class ExtraClassService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly render = inject(Renderer2);
  private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  private styles: Record<string, Styles> = {};
  private subscriptions: Record<string, Subscription> = {};

  update(key: string, styles: Styles): void {
    if (this.styles[key]) {
      const lastStyles = this.styles[key];
      if (Array.isArray(lastStyles)) {
        lastStyles.map((style) => this.render.removeClass(this.elementRef.nativeElement, style));
      } else if (lastStyles) {
        this.render.removeClass(this.elementRef.nativeElement, lastStyles);
      }
    }
    if (Array.isArray(styles)) {
      styles.map((style) => this.render.addClass(this.elementRef.nativeElement, style));
    } else if (styles) {
      this.render.addClass(this.elementRef.nativeElement, styles);
    }
    this.styles[key] = styles;
  }

  patch(style: string, active: boolean): void {
    if (active) {
      this.render.addClass(this.elementRef.nativeElement, style);
    } else {
      this.render.removeClass(this.elementRef.nativeElement, style);
    }
  }

  register(key: string, observable: Observable<unknown>, callback: () => void, start = true): void {
    if (this.subscriptions[key]) {
      this.unregister(key);
    }
    if (start) {
      callback();
    }
    this.subscriptions[key] = observable
      .pipe(
        tap(() => callback()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  unregister(key: string): void {
    this.subscriptions[key].unsubscribe();
  }
}
