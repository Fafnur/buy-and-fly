import { HttpInterceptorFn } from '@angular/common/http';

export const contentTypeInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.headers.has('Content-Type') && req.headers.get('enctype') !== 'multipart/form-data') {
    req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
  }

  return next(req);
};
