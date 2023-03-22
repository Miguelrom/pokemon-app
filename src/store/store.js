import { configureStore } from "@reduxjs/toolkit";
import adoptedReducer from './adoptedSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    adopted: adoptedReducer,
    cart: cartReducer,
  }
});
