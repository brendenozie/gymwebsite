import "next-auth";

export interface ICityData {
  img: string;
  location: string;
  province: string;
  id?: string;
}
export interface IInspiredCity {
  location: string;
  id: string;
}

export interface IStyleData {
  img: string;
  title: string;
}

export interface IProperty {
  propertyImage: {
    image: {
      url: string;
    };
  };
  destinationInfo: {
    distanceFromDestination: {
      value: number;
    };
  };
  mapMarker: {
    latLong: {
      latitude: number;
      longitude: number;
    };
  };
  id: string;
  name: string;
  neighborhood: {
    name: string;
  };
  reviews: {
    score: number;
  };
  price: {
    options: [
      {
        formattedDisplayPrice: string;
      }
    ];
    lead: {
      amount: number;
    };
  };
}

export interface IResult {
  hotelId: string;
  description: string;
  img: uploadImage[];
  lat: number;
  location?: number;
  long: number;
  price: string;
  star: number;
  title: string;
  total: number;
  userEmail?: string;
  startDate?: string;
  endDate?: string;
}

export interface IDetails {
  images: string[];
  amenities: string[];
  address: string;
}

export interface IOptions {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
    "content-type"?: string;
  };
  body?: string;
}

export interface ISuggestion {
  regionNames: {
    shortName: string;
    displayName: string;
  };
  gaiaId: number;
  type: string;
}

export interface ISuggestionFormatted {
  shortName: string;
  displayName: string;
  id: number;
  type: string;
  img?: string;
  location?: string;
  province?: string;
}

export interface provider {
  name: string;
  id: string;
}

export interface IReservation {
  price_data: {
    currency: string;
    unit_amount: number;
    product_data: {
      name: string;
      description: string;
      images: string[];
    };
  };
  quantity: number;
}

export interface ILocation{
  lat:any;
  lng:any;
}
export interface uploadImage {
  publicId: string;
  url: string;
  status: string;
}

export interface ICity {
  id:string;
  cityName : string;
  publicId : string;
  url      : string;
  status   : string;
}

export interface IUser {
  id: string;
	name : string;
	email : string;
	image : string;
	role : string;
}

export interface ITravelStyle {
  id: string;
  styleName : string;
  publicId : string;
  url      : string;
  status   : string;
}

export interface IDestination {
  startDate: string;
  endDate: string;
  hotelId: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  total: string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined;
  img: uploadImage[];
  id: string
  title: string
  description: string
  star: number
  lat: number
  location: string
  long: number
  price: float
  offer: boolean
  offerPrice: float
  status:string
  userEmail: string
  cityId: string
  createdAt: Date
}

export type IHotel = {
  [x: string]: any;
  img: uploadImage[];
  id: string
  title: string
  description: string
  star: number
  lat: number
  location: string
  long: number
  price: float
  offer: boolean
  offerPrice: float
  userEmail: string
  cityId: string
  createdAt: Date
  travelStyleId: string
}

export type IHotelSearch = {
  [x: string]: any;
  results: any[];
  id: string;
  title: string
  description: string
  star: number
  lat: number
  location: string
  long: number
  price: float
  offer: boolean
  offerPrice: float
  userEmail: string
  cityId: string
  createdAt: string
  travelStyleId: string
}