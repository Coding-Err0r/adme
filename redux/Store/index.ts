import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";
import filterReducer from "../FilterSlice";
import paymentMethodReducer from "../PaymentMethodSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    filter: filterReducer,
    paymentMethod: paymentMethodReducer,
  },
});
