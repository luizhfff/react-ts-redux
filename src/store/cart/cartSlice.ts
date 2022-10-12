import { CartItem, CartState } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const GRAPES_PROMOTION = process.env.REACT_APP_GRAPES_PROMOTION_ENABLED || false;
const APPLE_PROMOTION = process.env.REACT_APP_APPLE_PROMOTION_ENABLED || false;

const initialState: CartState = {
  items: [],
  total: 0,
  discount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      let elementIndex = state.items.findIndex((el) => el.name === action.payload.name);
      if (state.items.length === 0 || elementIndex === -1) {
        state.items.push(action.payload);
        state.total += action.payload.price;
      } else {
        state.items[elementIndex].quantity += 1;
        state.total += action.payload.price;
        if (action.payload.name === 'apple' && APPLE_PROMOTION) {
          if (state.items[elementIndex].quantity > 2) {
            state.discount += action.payload.price * 0.2;
          } else {
            state.discount += state.items[elementIndex].quantity * action.payload.price * 0.2;
          }
        }
        if (action.payload.name === 'grapes' && GRAPES_PROMOTION) {
          if (state.items[elementIndex].quantity % 2 === 0) {
            state.discount += action.payload.price;
          }
        }
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<CartItem>) => {
      let elementIndex = state.items.findIndex((el) => el.name === action.payload.name);
      if (state.items.length > 0 && elementIndex !== -1) {
        if (state.items[elementIndex].quantity === 1) {
          state.items.splice(elementIndex, 1);
        } else {
          state.items[elementIndex].quantity -= 1;
        }
      }
      // Recalculate total and discount on item removal
      state.discount = 0;
      state.total = 0;
      state.items.forEach((item) => {
        state.total += item.price * item.quantity;
        if (item.name === 'grapes') {
          if (GRAPES_PROMOTION) {
            state.discount += Math.floor(item.quantity / 2) * item.price;
          }
        }
        if (item.name === 'apple') {
          if (APPLE_PROMOTION) {
            if (item.quantity >= 2) {
              state.discount += item.quantity * item.price * 0.2;
            }
          }
        }
      });
    },
    emptyCart: (state: CartState) => {
      state.items = [];
      state.total = 0;
      state.discount = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
