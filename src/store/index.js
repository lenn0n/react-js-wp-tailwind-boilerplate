import { configureStore } from '@reduxjs/toolkit';

import modalSlice from '@store/features/modal/modalSlice';
import authenticationSlice from '@store/features/authentication/authenticationSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
    authentication: authenticationSlice
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
