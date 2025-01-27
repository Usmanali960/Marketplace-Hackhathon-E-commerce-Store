import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Assuming this is your cart slice
import wishlistReducer from './wishlistSlice';// Assuming this is your wishlist slice

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
