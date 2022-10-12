import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
