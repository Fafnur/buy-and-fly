export interface SearchHotelsResponse {
  readonly results: {
    readonly locations: [
      {
        readonly cityName: string;
        readonly fullName: string;
        readonly countryCode: string;
        readonly countryName: string;
        readonly iata: string[];
        readonly id: string;
        readonly hotelsCount: string;
        readonly location: {
          readonly lat: string;
          readonly lon: string;
        };
        readonly _score: number;
      },
    ];
    readonly hotels: [
      {
        readonly label: string;
        readonly locationName: string;
        readonly locationId: string;
        readonly id: string;
        readonly fullName: string;
        readonly location: {
          readonly lat: string;
          readonly lon: string;
        };
      },
    ];
  };
  readonly status: string;
}
