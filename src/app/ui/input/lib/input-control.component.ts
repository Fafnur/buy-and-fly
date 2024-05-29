import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  inject,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControlStatus, TouchedChangeEvent } from '@angular/forms';
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

  @ContentChild(LabelComponent) label?: LabelComponent;
  @ContentChild(InputComponent) input!: InputComponent;

  private isDisabled = false;

  ngAfterViewInit(): void {
    if (this.input) {
      this.input.elementRef.nativeElement.addEventListener('click', this.onFocusin);
      this.input.elementRef.nativeElement.addEventListener('focusout', this.onFocusout);
      this.input.elementRef.nativeElement.addEventListener('input', this.onInput);
      this.input.elementRef.nativeElement.addEventListener('change', this.onInput);
      this.onInput({ target: this.input.elementRef.nativeElement });

      this.input.ngControl.control?.events
        .pipe(
          filter((event) => event instanceof TouchedChangeEvent),
          tap(() => this.check()),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();

      this.input.ngControl.valueChanges
        ?.pipe(
          tap(() => {
            if (!this.input?.ngControl.value && this.elementRef.nativeElement.classList.contains('is-value')) {
              this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
            }
            this.onInput({ target: this.input.elementRef.nativeElement });
          }),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();

      this.input.ngControl.statusChanges
        ?.pipe(
          startWith(this.input.ngControl.status),
          tap((status: FormControlStatus) => {
            this.isDisabled = status === 'DISABLED';
            this.disable();
          }),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe();
    } else {
      console.warn('Input[baf-input] not found. Add child <input baf-input /> in <baf-input-control></baf-input-control>');
    }
  }

  ngOnDestroy(): void {
    if (this.input) {
      this.input.elementRef.nativeElement.removeEventListener('click', this.onFocusin);
      this.input.elementRef.nativeElement.removeEventListener('focusout', this.onFocusout);
      this.input.elementRef.nativeElement.removeEventListener('input', this.onInput);
      this.input.elementRef.nativeElement.removeEventListener('change', this.onInput);
    }
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
    if (this.input?.ngControl.touched) {
      if (this.input.ngControl.errors) {
        this.renderer.addClass(this.elementRef.nativeElement, 'is-invalid');
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, 'is-invalid');
      }
    }
  }
}
