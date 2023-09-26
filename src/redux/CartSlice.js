import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    inCartProducts: [],
  },
  reducers: {
    add: (state, action) => {
      state.inCartProducts.push(action.payload);
    },
    remove: (state, action) => {
      const filtered = state.inCartProducts.filter(
        e => e.id !== action.payload,
      );
      state.inCartProducts = [...filtered];
    },
  },
});

export const {add: addCart, remove: removeCart} = CartSlice.actions;

export default CartSlice.reducer;
