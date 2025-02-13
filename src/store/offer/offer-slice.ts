import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Offers, OfferFull } from '../../types/offers.ts';
import { OfferReviews } from '../../types/reviews.ts';
import {
  changeFavoriteStatus,
  fetchNearbyOffers,
  fetchOfferComments,
  getOfferInfoByID,
  postCommentToOffer,
} from '../api-actions';

type OfferInitialStateType = {
  offerInfo: OfferFull | null;
  nearbyOffers: Offers;
  comments: OfferReviews;
  isLoading: boolean;
  isError: boolean;
  isPostReviewError: boolean;
  isPostCommentLoading: boolean;
}

const initialState: OfferInitialStateType = {
  offerInfo: null,
  nearbyOffers: [],
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
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
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
  },
  selectors: {
    selectOfferInfo: (state: OfferInitialStateType): OfferFull | null => state.offerInfo,
    selectNearbyOffers: (state: OfferInitialStateType): Offers => state.nearbyOffers,
    selectOfferComments: (state: OfferInitialStateType): OfferReviews => state.comments,
    selectOfferLoadingStatus: (state: OfferInitialStateType): boolean => state.isLoading,
    selectOfferErrorStatus: (state: OfferInitialStateType): boolean => state.isError,
    selectPostReviewErrorStatus: (state: OfferInitialStateType): boolean => state.isPostReviewError,
    selectPostReviewLoadingStatus: (state: OfferInitialStateType): boolean => state.isPostCommentLoading,
  },
});

const {
  selectOfferInfo,
  selectNearbyOffers,
  selectOfferComments,
  selectOfferLoadingStatus,
  selectOfferErrorStatus,
  selectPostReviewErrorStatus,
  selectPostReviewLoadingStatus,
} = offer.selectors;

export {
  selectOfferInfo,
  selectNearbyOffers,
  selectOfferComments,
  selectOfferLoadingStatus,
  selectOfferErrorStatus,
  selectPostReviewErrorStatus,
  selectPostReviewLoadingStatus,
};


