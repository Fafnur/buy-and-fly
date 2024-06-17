import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
