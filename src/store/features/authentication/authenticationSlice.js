import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: {}
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    updateUserLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
  }
});

export const { updateUserLoggedIn } = authenticationSlice.actions;

export default authenticationSlice.reducer;