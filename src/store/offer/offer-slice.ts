import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers, Offer } from '../../types/offers.ts';
import { OfferReviews } from '../../types/reviews.ts';
import { changeFavoriteStatus, fetchNearbyCards, fetchOfferComments, getOfferInfoByID, postCommentToOffer } from '../api-actions';

type OfferInitialStateType = {
  offerInfo: Offer | null;
  nearbyCards: Offers;
  comments: OfferReviews;
  isLoading: boolean;
  isError: boolean;
  isPostReviewError: boolean;
  isPostCommentLoading: boolean;
}

const initialState: OfferInitialStateType = {
  offerInfo: null,
  nearbyCards: [],
  comments: [],
  isLoading: false,
  isError: false,
  isPostReviewError: false,
  isPostCommentLoading: false,
};

export const offer = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOfferInfoByID.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getOfferInfoByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offerInfo = action.payload;
      })
      .addCase(getOfferInfoByID.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchNearbyCards.fulfilled, (state, action) => {
        state.nearbyCards = action.payload;
      })
      .addCase(fetchOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentToOffer.pending, (state) => {
        state.isPostReviewError = false;
        state.isPostCommentLoading = true;
      })
      .addCase(postCommentToOffer.fulfilled, (state, action) => {
        state.isPostCommentLoading = false;
        state.comments.push(action.payload);
      })
      .addCase(postCommentToOffer.rejected, (state) => {
        state.isPostReviewError = true;
        state.isPostCommentLoading = false;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (state.offerInfo && state.offerInfo.id === action.payload.id) {
          state.offerInfo.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
