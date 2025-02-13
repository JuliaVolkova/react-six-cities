export const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
] as const;

export const DEFAULT_CITY = CITIES[0];

export const AppRoute = {
  Cities: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
} as const;

export const OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

export const DEFAULT_PLACE = 'Cities';

export const SortingOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  RATING: 'Top rated first'
} as const;

export const MapOption = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
};

export const NameSpace = {
  Offers: 'offers',
  Offer: 'offer',
  Favorites: 'favorites',
  User: 'user',
  Cities: 'cities'
} as const;

export const APIRoute = {
  Offers: '/offers',
  Favorites: '/favorite',
  Comments: '/comments',
  Login: '/login',
  Logout: '/logout'
} as const;

export const AuthorizationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN',
} as const;

export const RatingNames: {[index: string]: string} = {
  '1': 'terribly',
  '2': 'badly',
  '3': 'not bad',
  '4': 'good',
  '5': 'perfect'
};

export const CommentLength = {
  MIN: 50,
  MAX: 300
} as const;

