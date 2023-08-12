import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";
import filterReducer from "../FilterSlice";
import paymentMethodReducer from "../PaymentMethodSlice";
import dropdownReducer from "../DropdownSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    filter: filterReducer,
    paymentMethod: paymentMethodReducer,
    dropdown: dropdownReducer,
  },
});
