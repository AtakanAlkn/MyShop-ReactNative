import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteProducts: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action) => {
      state.favoriteProducts.push(action.payload);
    },
    remove: (state, action) => {
      const newFavorite = state.favoriteProducts.filter(
        element => element.id !== action.payload,
      );
      state.favoriteProducts = [...newFavorite];
    },
  },
});

export const {add, remove} = favoriteSlice.actions;

export default favoriteSlice.reducer;
