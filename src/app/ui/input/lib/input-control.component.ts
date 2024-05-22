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
import { FormControlStatus } from '@angular/forms';
import { startWith, tap } from 'rxjs';

import { LabelComponent } from '@baf/ui/label';

import { InputDirective } from './input.directive';

@Component({
  selector: 'baf-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'baf-input-control',
  },
})
export class InputControlComponent implements AfterViewInit, OnDestroy {
  readonly destroyRef = inject(DestroyRef);
  readonly elementRef: ElementRef<HTMLInputElement> = inject(ElementRef);
  readonly renderer = inject(Renderer2);

  @ContentChild(LabelComponent) label?: LabelComponent;
  @ContentChild(InputDirective) input?: InputDirective;

  private isDisabled = false;

  ngAfterViewInit(): void {
    if (this.input) {
      this.input.elementRef.nativeElement.addEventListener('click', this.onFocusin);
      this.input.elementRef.nativeElement.addEventListener('focusout', this.onFocusout);
      this.input.elementRef.nativeElement.addEventListener('input', this.onInput);
      this.onInput({ target: this.input.elementRef.nativeElement });

      this.input.ngControl.valueChanges
        ?.pipe(
          tap(() => {
            if (!this.input?.ngControl.value && this.elementRef.nativeElement.classList.contains('is-value')) {
              this.renderer.removeClass(this.elementRef.nativeElement, 'is-value');
            }
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
      console.warn('Input[fafnInput] not found. Add child <input fafnInput /> in <fafn-input-control></fafn-input-control>');
    }
  }

  ngOnDestroy(): void {
    if (this.input) {
      this.input.elementRef.nativeElement.removeEventListener('click', this.onFocusin);
      this.input.elementRef.nativeElement.removeEventListener('focusout', this.onFocusout);
      this.input.elementRef.nativeElement.removeEventListener('input', this.onInput);
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
