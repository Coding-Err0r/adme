import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const imagePreviewSlice = createSlice({
  name: "imagePreview",
  initialState,
  reducers: {
    openImagePreviewModal: (state: any, action: any) => {
      state.open = action.payload.open;
    },
  },
});

export const { openImagePreviewModal } = imagePreviewSlice.actions;

export default imagePreviewSlice.reducer;
