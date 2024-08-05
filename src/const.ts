export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'] as const;

export const CardClassNamesMap = {
  Main: 'cities__card',
  Offer: 'near-places__card',
  Favorites: 'favorites__card'
} as const;


export const CardListClassNamesMap = {
  Main: 'cities__places-list',
  Offer: 'near-places__list',
  Favorites: 'favorites__list'
} as const;

export const CardImageOptions = {
  Main: { width: 260, height: 200, className: 'cities__image-wrapper' },
  Favorites: { width: 150, height: 110, className: 'favorites__image-wrapper' },
  Offer: { width: 260, height: 200, className: 'near-places__image-wrapper' }
} as const;

export const BookmarkButtonOptions = {
  Main: { width: 18, height: 19, className: 'place-card__bookmark-button' },
  Offer: { width: 31, height: 33, className: 'offer__bookmark-button' },
  Favorites: { width: 18, height: 19, className: 'place-card__bookmark-button' }
} as const;
