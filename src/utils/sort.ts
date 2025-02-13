import { SortingOptions } from '../const.ts';
import { Offers } from '../types/offers.ts';

export const sortBy = {
  [SortingOptions.POPULAR]: (offers: Offers) => offers,
  [SortingOptions.PRICE_LOW_TO_HIGH]: (offers: Offers) => offers.sort((firstOffer, secondOffer) => firstOffer.price - secondOffer.price),
  [SortingOptions.PRICE_HIGH_TO_LOW]: (offers: Offers) => offers.sort((firstOffer, secondOffer) => secondOffer.price - firstOffer.price),
  [SortingOptions.RATING]: (offers: Offers) => offers.sort((firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating),
};
