import { configureStore } from '@reduxjs/toolkit';

import modalSlice from '@store/features/modal/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
