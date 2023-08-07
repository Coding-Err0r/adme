import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    handleFilter: (state: any, action: any) => {
      state.id = action.payload.id;
    },
  },
});

export const { handleFilter } = filterSlice.actions;

export default filterSlice.reducer;
