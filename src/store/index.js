import { configureStore } from '@reduxjs/toolkit';

import modalSlice from '@store/features/modal/modalSlice';
import authenticationSlice from '@store/features/authentication/authenticationSlice';
import toastSlice from '@store/features/toast/toastSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    authentication: authenticationSlice,
    toast: toastSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
