import { createSlice } from "@reduxjs/toolkit";

export const isLoading = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: () => {
      return true;
    },
    setNotLoading: () => {
      return false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoading, setNotLoading } = isLoading.actions;

export default isLoading.reducer;
