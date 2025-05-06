// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import callmeReducer from './callme';

export const store = configureStore({
  reducer: {
    phone: callmeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;