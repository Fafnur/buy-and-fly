import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

import type { GetPathParams, PathValues } from '@baf/core';
import { getRoute } from '@baf/core';

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
