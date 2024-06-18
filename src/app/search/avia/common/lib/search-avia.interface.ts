export interface SearchAviaLine {
  readonly origin: string;
  readonly originName: string;
  readonly destination: string;
  readonly destinationName: string;
  readonly duration: number;
  readonly departureAt: string;
  readonly arriveAt: string;
  readonly transfers: number;
}
