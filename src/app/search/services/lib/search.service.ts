import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchCityOrAirport } from '@baf/search/common';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly httpClient = inject(HttpClient);

  findCityOrAirport(term: string): Observable<SearchCityOrAirport[]> {
    return this.httpClient.get<SearchCityOrAirport[]>(`/api/autocomplete/places2?locale=ru&types[]=airport&types[]=city&term=${term}`);
  }
}
