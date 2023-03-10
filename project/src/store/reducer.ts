import {createReducer} from '@reduxjs/toolkit';
import { changeCity, fillOffers } from './action';
import { offers } from '../mocks/offers';

const initialState = {
  city: '',
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = 'city';
    })
    .addCase(fillOffers, (state) => {
      state.offers = [];
    });
});

export {reducer};
