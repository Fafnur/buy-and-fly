import { HttpInterceptorFn } from '@angular/common/http';

// import { apiTokenInterceptor } from './api-token.interceptor';
import { contentTypeInterceptor } from './content-type.interceptor';
// import { frontRequestIdInterceptor } from './front-request-id.interceptor';
// import { visitorInterceptor } from './visitor.interceptor';
import { withCredentialsInterceptor } from './with-credentials.interceptor';

export const httpInterceptorProviders: HttpInterceptorFn[] = [
  contentTypeInterceptor,
  // frontRequestIdInterceptor,
  // visitorInterceptor,
  withCredentialsInterceptor,
  // apiTokenInterceptor,
];
