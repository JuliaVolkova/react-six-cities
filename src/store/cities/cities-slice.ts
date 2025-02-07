import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CITIES, NameSpace } from '../../const';

type CityInitialStateType = {
  currentCity: typeof CITIES[number];
}

const initialState: CityInitialStateType = {
  currentCity: CITIES[0]
};

export const cities = createSlice({
  name: NameSpace.Cities,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<{city: typeof CITIES[number]}>) => {
      state.currentCity = action.payload.city;
    }
  }
});

export const { changeCity } = cities.actions;
