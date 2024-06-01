import { Pipe, PipeTransform } from '@angular/core';

import { GetPathParams, getRoute, PathValues } from '@baf/core';

@Pipe({
  name: 'path',
  standalone: true,
})
export class PathPipe implements PipeTransform {
  transform<T extends PathValues>(path: T, params?: GetPathParams<T>): string {
    const route = getRoute(path, params);

    return route.length > 1 ? `/${route.slice(1).join('/')}` : `${route[0]}`;
  }
}
