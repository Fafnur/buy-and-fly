export interface SearchLocation {
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
}

export interface SearchHotelInfo {
  readonly label: string;
  readonly locationName: string;
  readonly locationId: string;
  readonly id: string;
  readonly fullName: string;
  readonly location: {
    readonly lat: string;
    readonly lon: string;
  };
}

export interface SearchHotelsResponse {
  readonly results: {
    readonly locations: SearchLocation[];
    readonly hotels: SearchHotelInfo[];
  };
  readonly status: string;
}

export interface SearchHotel {
  readonly locationId: number;
  readonly hotelId: number;
  readonly priceFrom: number;
  readonly priceAvg: number;
  readonly pricePercentile: Record<string, number>;
  readonly stars: number;
  readonly hotelName: string;
  readonly location: {
    readonly name: string;
    readonly country: string;
    readonly state: null | string;
    readonly geo: {
      readonly lat: number;
      readonly lon: number;
    };
  };
}
