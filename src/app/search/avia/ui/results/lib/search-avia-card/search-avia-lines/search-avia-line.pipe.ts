import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import type { SearchAviaLine, SearchFlight } from '@baf/search/avia/common';

@Pipe({
  name: 'searchAviaLine',
  standalone: true,
})
export class SearchAviaLinePipe implements PipeTransform {
  private readonly activatedRoute = inject(ActivatedRoute);

  transform(flight: SearchFlight, back = false): SearchAviaLine {
    const { fromName, toName } = this.activatedRoute.snapshot.queryParams;

    if (back) {
      const arriveAt = new Date(flight.return_at);
      arriveAt.setMinutes(arriveAt.getMinutes() + flight.duration_back);

      return {
        origin: flight.destination,
        destination: flight.origin,
        originName: typeof toName === 'string' ? toName : flight.destination,
        destinationName: typeof fromName === 'string' ? fromName : flight.origin,
        duration: flight.duration_back,
        departureAt: flight.return_at,
        arriveAt: arriveAt.toISOString(),
        transfers: flight.return_transfers,
      };
    }

    const arriveAt = new Date(flight.departure_at);
    arriveAt.setMinutes(arriveAt.getMinutes() + flight.duration_to);

    return {
      origin: flight.origin,
      destination: flight.destination,
      originName: typeof fromName === 'string' ? fromName : flight.origin,
      destinationName: typeof toName === 'string' ? toName : flight.destination,
      duration: flight.duration_to,
      departureAt: flight.departure_at,
      arriveAt: arriveAt.toISOString(),
      transfers: flight.transfers,
    };
  }
}
