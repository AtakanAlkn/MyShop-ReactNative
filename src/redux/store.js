import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './FavoriteSlice';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';

const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
