import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const adoptedSlice = createSlice({
  name: 'adopted',
  initialState,
  reducers: {
    pokemonAdopted(state, action) {
      state.items.push(...action.payload)
    },
  },
});

export const { pokemonAdopted } = adoptedSlice.actions;

export default adoptedSlice.reducer;

export const selectAdopted = state => state.adopted.items;
