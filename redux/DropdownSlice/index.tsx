import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: null,
};

export const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdown: (state: any, action: any) => {
      state.isOpen = action.payload.isOpen;
      state.id = action.payload.id;
    },
  },
});

export const { toggleDropdown } = dropdownSlice.actions;

export default dropdownSlice.reducer;
