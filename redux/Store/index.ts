import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
  },
});
