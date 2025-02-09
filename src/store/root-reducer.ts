import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cities } from './cities/cities-slice';
import { offers } from './offers/offers-slice';
import { offer } from './offer/offer-slice';

export const rootReducer = combineReducers({
  [NameSpace.Cities]: cities.reducer,
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.Offer]: offer.reducer,
});
