import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 3,
};

export const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {
    handlePaymentMethod: (state: any, action: any) => {
      state.id = action.payload.id;
    },
  },
});

export const { handlePaymentMethod } = paymentMethodSlice.actions;

export default paymentMethodSlice.reducer;
