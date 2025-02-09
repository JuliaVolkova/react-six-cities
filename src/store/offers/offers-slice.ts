import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit';
import { NameSpace, SortingOptions } from '../../const';
import { changeFavoriteStatus, fetchOffers } from '../api-actions';
import { Offers } from '../../types/offers.ts';
import { SortOptions } from '../../types/app.ts';
import { selectCurrentCity } from '../cities/cities-slice.ts';
import { sortBy } from '../../utils/sort.ts';

type OffersInitialStateType = {
  data: Offers;
  isLoading: boolean;
  isError: boolean;
  sortOption: SortOptions;
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
    changeSort: (state, action: PayloadAction<{ option: SortOptions }>) => {
      state.sortOption = action.payload.option;
    },
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
    selectOffers: (state: OffersInitialStateType): Offers => state.data,
    selectOffersLoadingStatus: (state: OffersInitialStateType): boolean => state.isLoading,
    selectCurrentSortOption: (state: OffersInitialStateType): SortOptions => state.sortOption,
  },
});

const { changeSort } = offers.actions;
const { selectOffers, selectOffersLoadingStatus, selectCurrentSortOption } = offers.selectors;

const selectFilteredOffersByCurrentCity = createSelector([selectOffers, selectCurrentCity],
  (offersList, currentCity) => offersList.filter((offer) => offer.city.name === currentCity.name));

const selectSortedOffers = createSelector([selectFilteredOffersByCurrentCity, selectCurrentSortOption],
  (filteredOffers, currentSort) => sortBy[currentSort](filteredOffers));

export {
  changeSort,
  selectOffers,
  selectOffersLoadingStatus,
  selectCurrentSortOption,
  selectSortedOffers,
};
