import { AppRoute } from './const.ts';

export const CardClassNamesMap = {
  Cities: 'cities__card',
  Offer: 'near-places__card',
  Favorites: 'favorites__card',
} as const;

export const CardListClassNamesMap = {
  Cities: 'cities__places-list',
  Offer: 'near-places__list',
  Favorites: 'favorites__list',
} as const;

export const CardImageOptions = {
  Cities: { width: 260, height: 200, className: 'cities__image-wrapper' },
  Favorites: { width: 150, height: 110, className: 'favorites__image-wrapper' },
  Offer: { width: 260, height: 200, className: 'near-places__image-wrapper' },
} as const;

export const BookmarkButtonOptions = {
  Cities: { width: 18, height: 19, className: 'place-card__bookmark-button' },
  Offer: { width: 31, height: 33, className: 'offer__bookmark-button' },
  Favorites: {
    width: 18,
    height: 19,
    className: 'place-card__bookmark-button',
  },
} as const;

export const LogoImgOptions = {
  Header: { width: 81, height: 41, className: 'header__logo' },
  Footer: { width: 64, height: 33, className: 'footer__logo' },
} as const;

export const MainBlockClassNamesMap: { [key: string]: string } = {
  Cities: 'page page--gray page--main',
  Offer: 'page',
  Favorites: 'page',
  Login: 'page page--gray page--login',
  NotFound: 'page page--gray page--main',
} as const;

export const PathToPlacesMap: { [key: string]: keyof typeof MainBlockClassNamesMap } =
  {
    [AppRoute.Cities]: 'Cities',
    [AppRoute.Offer]: 'Offer',
    [AppRoute.Favorites]: 'Favorites',
    [AppRoute.Login]: 'Login',
  } as const;
