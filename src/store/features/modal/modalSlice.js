import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  modalId: '',
  hidden: false,
  shown: false,
  componentProps: {}
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
    modalShown(state) {
      state.shown = true;
      state.hidden = false;
    },
    modalHidden(state) {
      state.shown = false;
      state.hidden = true;
    }
  }
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;