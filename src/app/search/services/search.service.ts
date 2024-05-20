import { inject, Injectable } from '@angular/core';

import { ApiService } from '@baf/core';

@Injectable()
export class SearchService {
  private readonly apiService = inject(ApiService);
}
