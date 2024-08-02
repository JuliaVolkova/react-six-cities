export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const CardClassNamesMap = {
  Main: 'cities__card',
  Offer: 'near-places__card'
} as const;


export const CardListClassNamesMap = {
  Main: 'cities__places-list',
  Offer: 'near-places__list'
} as const;
