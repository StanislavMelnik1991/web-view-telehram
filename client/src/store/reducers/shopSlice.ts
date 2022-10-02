/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasket, IFood } from '../../type';
import { getData } from '../db';

interface IToDoListState {
  menu: { [id: string]: IFood },
  basket: { [id: string]: IBasket },
  total: { positions: number, price: number },
}

const initialState: IToDoListState = {
  menu: getData(),
  basket: {},
  total: { positions: 0, price: 0 },
};

export const shopSlice = createSlice({
  name: 'Shop',
  initialState,
  reducers: {
    changeCount(state, action: PayloadAction<{ productId: string, count: 1 | -1 }>) {
      const id = action.payload.productId;
      state.basket[id] && (state.basket[id].count += action.payload.count);
      !state.basket[id] && (state.basket[id] = {
        ...state.menu[action.payload.productId],
        count: action.payload.count,
      });
      state.total.positions += action.payload.count;
      state.total.price += (action.payload.count * state.basket[id].price);
      state.total.price = Number(state.total.price.toFixed(2));
      if (state.basket[id].count < 1) {
        delete state.basket[id];
      }
    },
  },
});

export default shopSlice.reducer;
