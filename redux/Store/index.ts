import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";
import filterReducer from "../FilterSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    filter: filterReducer,
  },
});
