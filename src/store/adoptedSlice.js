import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const adoptedSlice = createSlice({
  name: 'adopted',
  initialState,
  reducers: {
    pokemonAdopted(state, action) {
      for(const item of action) {
        sessionStorage.setItem(`adopted_${item.id}`, item.name);
      }
      state.items.push(...action.payload)
    },
  },
});

export const { pokemonAdopted } = adoptedSlice.actions;

export default adoptedSlice.reducer;

export const selectAdopted = state => state.adopted.items;

