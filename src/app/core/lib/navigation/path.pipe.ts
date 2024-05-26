import { inject, Pipe, PipeTransform } from '@angular/core';

import { GetPathParams, PathValues } from '@baf/core';

import { NavigationService } from './navigation.service';

@Pipe({
  name: 'path',
  standalone: true,
})
export class PathPipe implements PipeTransform {
  private readonly navigationService = inject(NavigationService);

  transform<T extends PathValues>(path: T, params?: GetPathParams<T>): string {
    const route = this.navigationService.getRoute(path, params);

    return route.length > 1 ? `/${route.slice(1).join('/')}` : `${route[0]}`;
  }
}
