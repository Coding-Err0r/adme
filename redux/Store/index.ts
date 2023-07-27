import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";
import imagePreviewReducer from "../FaqSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    imagePreview: imagePreviewReducer,
  },
});
