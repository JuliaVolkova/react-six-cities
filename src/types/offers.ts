import { CITIES } from '../const.ts';

export type CityName = typeof CITIES[number];

export type City = {
  name: CityName;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type OfferType = 'hotel' | 'house' | 'apartment' | 'room';

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type Offers = Offer[];
