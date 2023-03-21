import { configureStore } from "@reduxjs/toolkit";
import adoptedReducer from './adoptedSlice';
import cartReducer from './cartReducer';

export default store = configureStore({
  reducer: {
    adopted: adoptedReducer,
    cart: cartReducer,
  }
});
