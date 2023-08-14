import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    handlePortfolio: (state: any, action: any) => {
      state.id = action.payload.id;
    },
  },
});

export const { handlePortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
