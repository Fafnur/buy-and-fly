import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';

export const SSR_COOKIES = new InjectionToken<string>('SSR_COOKIES');

export const withCredentialsInterceptor: HttpInterceptorFn = (req, next) => {
  const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  req = req.clone({
    withCredentials: true,
  });

  if (isBrowser) {
    req = req.clone({
      withCredentials: true,
    });
  } else {
    const cookies = inject(SSR_COOKIES, { optional: true });

    // Manually add the cookie header
    req = req.clone({
      withCredentials: true,
      setHeaders: {
        cookie: cookies ?? '',
      },
    });
  }

  return next(req);
};
