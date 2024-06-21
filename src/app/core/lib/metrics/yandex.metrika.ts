import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

import { METRIC_CONFIG } from './metrica.interface';

declare global {
  interface Window {
    readonly ym?: (...params: unknown[]) => void;
  }
}

@Injectable()
export class YandexMetrika {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly config = inject(METRIC_CONFIG);

  private readonly counter: (...params: unknown[]) => void;

  constructor() {
    if (this.isBrowser && typeof this.document.defaultView?.ym !== 'undefined' && !!this.config.counter) {
      this.counter = this.document.defaultView.ym;
    } else {
      this.counter = () => {};
    }
  }

  hit(url: string, options?: Record<string, unknown>): void {
    let clearReferrer = false;
    if (
      (this.isBrowser && !this.config.domains.every((domain) => this.document.referrer.indexOf(domain) < 0)) ||
      !this.config.paths.every((path) => this.document.location.pathname.indexOf(path) < 0)
    ) {
      clearReferrer = true;
    }

    const optionsAll: { referer?: string } = { ...options };
    if (clearReferrer) {
      optionsAll.referer = '';
    }
    this.counter(this.config.counter, 'hit', url, optionsAll);
  }

  reachGoal(target: string, options?: Record<string, unknown>): void {
    this.counter(this.config.counter, 'reachGoal', target, options);
  }

  set(params: Record<string, unknown>, options?: Record<string, unknown>): void {
    this.counter(this.config.counter, 'userParams', params, options);
  }
}
