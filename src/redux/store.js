import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./reducer/loading";

export const store = configureStore({
  reducer: {
    isLoading,
  },
});
