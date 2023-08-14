import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../FaqSlice";
import filterReducer from "../FilterSlice";
import paymentMethodReducer from "../PaymentMethodSlice";
import dropdownReducer from "../DropdownSlice";
import portfolioReducer from "../PortfolioSlice";

export const store = configureStore({
  reducer: {
    faq: faqReducer,
    filter: filterReducer,
    paymentMethod: paymentMethodReducer,
    dropdown: dropdownReducer,
    portfolio: portfolioReducer,
  },
});
