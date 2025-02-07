import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, store } from '.';
import { dropToken, saveToken } from '../services/token';
import { APIRoute } from '../const';
import { Offers, Offer } from '../types/offers';
import { OfferReviews, OfferReview, PostCommentInfo } from '../types/reviews.ts';
import { LoginData, User } from '../types/user.ts';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: typeof store.dispatch;
  extra: AxiosInstance;
}>();

export const fetchCards = createAppAsyncThunk<Offers, undefined>('cards/fetchCards',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);
    return data;
  }
);

export const checkAuthStatus = createAppAsyncThunk<User, undefined>('user/checkAuthStatus',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<User>(APIRoute.Login);
    return data;
  }
);

export const loginAction = createAppAsyncThunk<User, LoginData>('user/login',
  async ({email, password}, {extra: api}) => {
    const { data } = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(data.token);
    return data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>('user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const getOfferInfoByID = createAppAsyncThunk<Offer, string>('offer/getOfferInfo',
  async (id, {extra: api}) => {
    const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);

export const fetchNearbyCards = createAppAsyncThunk<Offers, string>('offer/fetchNearbyCards',
  async (id, {extra: api}) => {
    const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    return data;
  }
);

export const fetchOfferComments = createAppAsyncThunk<OfferReviews, string>('offer/fetchOfferComments',
  async (id, {extra: api}) => {
    const { data } = await api.get<OfferReviews>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const postCommentToOffer = createAppAsyncThunk<OfferReview, PostCommentInfo>('offer/postCommentToOffer',
  async ({id, comment}, {extra: api}) => {
    const { data } = await api.post<OfferReview>(`${APIRoute.Comments}/${id}`, {comment: comment.review, rating: +comment.rating});
    return data;
  }
);

export const fetchFavoriteCards = createAppAsyncThunk<Offers, undefined>('favorite/fetchCards',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Offers>(APIRoute.Favorites);
    return data;
  }
);

export const changeFavoriteStatus = createAppAsyncThunk<Offer, {offerId: string; status: number}>('favorite/changeStatus',
  async ({offerId, status}, {extra: api}) => {
    const { data } = await api.post<Offer>(`${APIRoute.Favorites}/${offerId}/${status}`);
    return data;
  }
);
