import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  componentProps: {
    label: "This is sample toast.",
    position: ""
  }, 
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast(state, action) {
      state.show = true;
      state.componentProps = { ...action.payload?.componentProps };
    },
    hideToast(state, action) {
      state.show = false;
      state.componentProps = {};
    },
  }
});

export const toastActions = toastSlice.actions;

export default toastSlice.reducer;