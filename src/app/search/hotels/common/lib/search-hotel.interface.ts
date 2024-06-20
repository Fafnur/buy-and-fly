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

export interface SearchHotelDto {
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

export interface SearchHotelDetails {
  readonly id: number;
  readonly cityId: number;
  readonly stars: number;
  readonly pricefrom: number;
  readonly rating: number;
  readonly popularity: number;
  readonly propertyType: number;
  readonly checkIn: string;
  readonly checkOut: string;
  readonly distance: number;
  readonly photoCount: number;
  readonly photos: {
    readonly url: string;
    readonly width: number;
    readonly height: number;
  }[];
  readonly photosByRoomType: Record<string, number>;
  readonly yearOpened: number;
  readonly yearRenovated: null | number;
  readonly cntRooms: number;
  readonly cntSuites: null | number;
  readonly cntFloors: number;
  readonly facilities: number[];
  readonly shortFacilities: string[];
  readonly location: {
    readonly lon: number;
    readonly lat: number;
  };
  readonly name: Record<string, string>;
  readonly address: Record<string, string>;
  readonly link: string;
  readonly poi_distance: unknown;
}

export interface SearchHotelsDetailsResponse {
  readonly pois: unknown[];
  readonly hotels: SearchHotelDetails[];
  readonly status: string;
}

export interface SearchHotel extends SearchHotelDto {
  readonly photos: {
    readonly url: string;
    readonly width: number;
    readonly height: number;
  }[];
}
