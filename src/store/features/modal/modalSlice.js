import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  modalId: '',
  componentProps: {}, 
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.show = true;
      state.modalId = action.payload.id;
      state.componentProps = { ...action.payload?.componentProps };
    },
    hideModal(state, action) {
      state.show = false;
      state.componentProps = {};
    },
  }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;