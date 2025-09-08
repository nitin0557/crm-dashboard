// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../store/reducers/uiSlice"

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
