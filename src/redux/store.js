import { configureStore } from "@reduxjs/toolkit";
import { testReducer } from "./reducers/testReducer";
import { testAPI } from "./api/testApi";
export const store = configureStore({
  reducer: {
    [testReducer.name]: testReducer.reducer,
    [testAPI.reducerPath]: testAPI.reducer,
  },
  middleware: (mid) => [...mid(), testAPI.middleware],
});
