import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  id: null,
};

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    toggleFaqCardOpen: (state: any, action: any) => {
      state.isOpen = action.payload.isOpen;
      state.id = action.payload.id;
    },
  },
});

export const { toggleFaqCardOpen } = faqSlice.actions;

export default faqSlice.reducer;
