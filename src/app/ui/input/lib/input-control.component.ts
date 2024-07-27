import type { AfterViewInit, OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, Component, contentChild, DestroyRef, ElementRef, inject, Renderer2 } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import type { FormControlStatus } from '@angular/forms';
import { TouchedChangeEvent } from '@angular/forms';
import { filter, startWith, tap } from 'rxjs';

import { LabelComponent } from '@baf/ui/label';

import { InputComponent } from './input.component';

@Component({
  selector: 'baf-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'baf-input-control',
  },
})
export class InputControlComponent implements AfterViewInit, OnDestroy {
  readonly destroyRef = inject(DestroyRef);
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  readonly label = contentChild<LabelComponent>(LabelComponent);
  readonly input = contentChild.required<InputComponent>(InputComponent);

  private isDisabled = false;

  ngAfterViewInit(): void {
    const input = this.input();
    if (!input) {
      console.warn('Input[baf-input] not found. Add child <input baf-input /> in <baf-input-control></baf-input-control>');
      return;
    }

    input.elementRef.nativeElement.addEventListener('click', this.onFocusin);
    input.elementRef.nativeElement.addEventListener('focusout', this.onFocusout);
    input.elementRef.nativeElement.addEventListener('input', this.onInput);
    input.elementRef.nativeElement.addEventListener('change', this.onInput);
    this.onInput({ target: input.elementRef.nativeElement });

    input.ngControl.control?.events
      .pipe(
        filter((event) => event instanceof TouchedChangeEvent),
        tap(() => this.check()),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    input.ngControl.valueChanges
      ?.pipe(
        tap(() => {
          if (!input.ngControl.value && this.elementRef.nativeElement.classList.contains('is-value')) {
            this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
          }
          this.onInput({ target: input.elementRef.nativeElement });
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();

    input.ngControl.statusChanges
      ?.pipe(
        startWith(input.ngControl.status),
        tap((status: FormControlStatus) => {
          this.isDisabled = status === 'DISABLED';
          this.disable();
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    const input = this.input();
    if (!input) {
      return;
    }

    input.elementRef.nativeElement.removeEventListener('click', this.onFocusin);
    input.elementRef.nativeElement.removeEventListener('focusout', this.onFocusout);
    input.elementRef.nativeElement.removeEventListener('input', this.onInput);
    input.elementRef.nativeElement.removeEventListener('change', this.onInput);
  }

  private onFocusin = () => {
    if (!this.isDisabled) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-pressed');
    }
  };

  private onFocusout = () => {
    if (!this.isDisabled) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-pressed');
    }
    this.check();
  };

  private onInput = (event: Event | { target: HTMLInputElement }) => {
    if (!this.isDisabled) {
      const target = event.target as HTMLInputElement;

      if (target.value?.length > 0) {
        this.renderer.addClass(this.elementRef.nativeElement, 'is-value');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
      }

      this.check();
    }
  };

  private disable(): void {
    if (this.isDisabled) {
      this.renderer.addClass(this.elementRef.nativeElement, 'is-disabled');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'is-disabled');
    }
  }

  private check(): void {
    if (this.input().ngControl.touched) {
      if (this.input().ngControl.errors) {
        this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
      }
    }
  }
}
