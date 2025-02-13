import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, DEFAULT_CITY, NameSpace } from '../../const';

type CityInitialStateType = {
  currentCity: typeof CITIES[number];
}

const initialState: CityInitialStateType = {
  currentCity: DEFAULT_CITY
};

export const cities = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: typeof CITIES[number]}>) => {
      state.currentCity = action.payload.city;
    }
  },
  selectors: {
    selectCurrentCity: (state: CityInitialStateType) => state.currentCity
  }
});

export const { changeCity } = cities.actions;
export const { selectCurrentCity } = cities.selectors;
