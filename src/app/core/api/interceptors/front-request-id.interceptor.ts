import { HttpInterceptorFn } from '@angular/common/http';

import { uuidv4 } from '../../utils/uuid.util';

export const frontRequestIdInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ headers: req.headers.set('front-request-id', uuidv4()) });

  return next(req);
};
