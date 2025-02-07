import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, SortingOptions } from '../../const';
import { changeFavoriteStatus, fetchCards } from '../api-actions';
import { Offers } from '../../types/offers.ts';
import { TSortOptions } from '../../types/app.ts';

type CardsInitialStateType = {
    data: Offers;
    isLoading: boolean;
    isError: boolean;
    sortOption: TSortOptions;
}

const initialState: CardsInitialStateType = {
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
      .addCase(fetchCards.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        const index = state.data.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state.data[index].isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export const {changeActiveSort} = offers.actions;
