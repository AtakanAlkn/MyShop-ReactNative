import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'user',
  initialState: {
    userData: [],
  },
  reducers: {
    add: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {add: addUser} = UserSlice.actions;

export default UserSlice.reducer;
