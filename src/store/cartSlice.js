import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdded(state, action) {
      state.items.push(action.payload);
    },
    itemRemoved(state, action) {
      const index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
    },
    adoptionSubmitted(state) {
      state.items.splice(0);
    }
  }
});

export default cartSlice.reducer;

export const { itemAdded, itemRemoved, adoptionSubmitted } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;
