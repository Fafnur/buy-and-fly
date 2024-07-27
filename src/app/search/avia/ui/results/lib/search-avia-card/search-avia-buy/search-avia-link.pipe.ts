import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import type { SafeUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'searchAviaLink',
  standalone: true,
})
export class SearchAviaLinkPipe implements PipeTransform {
  private domSanitizer = inject(DomSanitizer);

  transform(link: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(`https://www.aviasales.ru${link}`);
  }
}
