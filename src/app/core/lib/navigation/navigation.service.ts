import { inject, Injectable } from '@angular/core';
import { NavigationExtras, Router, UrlCreationOptions, UrlTree } from '@angular/router';

import { PathValues } from './navigation';

type Split<Value extends string, Pattern extends string = '/'> = Value extends `${infer LValue}${Pattern}${infer RValue}`
  ? [LValue, ...Split<RValue, Pattern>]
  : [Value];

type Filter<T extends string[]> = T extends [first: infer FirstProperty, ...args: infer OtherProperties extends string[]]
  ? FirstProperty extends `:${infer U}`
    ? U | Filter<OtherProperties>
    : Filter<OtherProperties>
  : never;

type Build<T extends string> = {
  [key in T]: string | number;
};

type GetParams<T extends string> = Build<Filter<Split<T>>>;

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private readonly router = inject(Router);

  createUrlTree<T extends PathValues>(path: T, params?: GetParams<T>, navigationExtras?: UrlCreationOptions): UrlTree {
    return this.router.createUrlTree(this.getRoute(path, params), navigationExtras);
  }

  getRoute<T extends PathValues>(path: T, params: Record<string, string | number> = {}): (string | number)[] {
    const segments = path.split('/').filter((value) => value?.length);
    const routeWithParams: (string | number)[] = ['/'];

    for (const segment of segments) {
      if (segment.charAt(0) === ':') {
        const paramName = segment.slice(1);
        if (params && params[paramName]) {
          routeWithParams.push(params[paramName]);
        } else {
          routeWithParams.push(paramName);
        }
      } else {
        routeWithParams.push(segment);
      }
    }

    return routeWithParams;
  }

  navigate(path: (string | number)[], extras?: NavigationExtras): Promise<boolean> {
    return this.router.navigate(path, extras);
  }

  navigateByUrl<T extends PathValues>(path: T, params?: GetParams<T>, extras?: NavigationExtras): Promise<boolean> {
    return this.navigate(this.getRoute(path, params), extras);
  }
}
