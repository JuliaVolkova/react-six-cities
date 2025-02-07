import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingOptions } from '../../const';
import { changeFavoriteStatus, fetchOffers } from '../api-actions';
import { Offers } from '../../types/offers.ts';
import { TSortOptions } from '../../types/app.ts';

type OffersInitialStateType = {
  data: Offers;
  isLoading: boolean;
  isError: boolean;
  sortOption: TSortOptions;
}

const initialState: OffersInitialStateType = {
  data: [],
  isLoading: false,
  isError: false,
  sortOption: SortingOptions.POPULAR,
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeActiveSort: (state, action: PayloadAction<{option: TSortOptions}>) => {
      state.sortOption = action.payload.option;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index].isFavorite = action.payload.isFavorite;
        }
      });
  },
  selectors: {
    selectOffers: (state: OffersInitialStateType): Offers => state.data
  }
});

export const {changeActiveSort} = offers.actions;
export const {selectOffers} = offers.selectors;
