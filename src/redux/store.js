import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './FavoriteSlice';
import cartReducer from './CartSlice';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cart: cartReducer, // Diğer reducer'ı burada ekleyin
  },
});

export default store;
