import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./popup.state";

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopup: (state, action) => {
      state.isPopupSignIn = action.payload.isPopupSignIn;
    },
  },
});

export const { setPopup } = popupSlice.actions;
export const popupReducer = popupSlice.reducer;
