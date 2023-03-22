import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdded(state, action) {
      sessionStorage.setItem(`cart_${action.payload.id}`, action.payload.name);
      state.items.push(action.payload);
    },
    itemRemoved(state, action) {
      sessionStorage.removeItem(`cart_${action.payload}`)
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.items.splice(index, 1);
    },
    adoptionSubmitted(state) {
      for (const item of state.items) {
        sessionStorage.removeItem(`cart_${item.id}`);
      }
      state.items.splice(0);
    }
  }
});

export default cartSlice.reducer;

export const { itemAdded, itemRemoved, adoptionSubmitted } = cartSlice.actions;

export const selectCartItems = state => state.cart.items;

