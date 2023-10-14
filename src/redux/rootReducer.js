import { combineReducers } from "@reduxjs/toolkit";

import { popupReducer } from "./popup/popup.slice";
import { authReducer } from "./auth/auth.slice";
import { cartReducer } from "./cart/cart.slice";
import { commentReducer } from "./comment/comment.slice";

export const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
  cart: cartReducer,
  comment: commentReducer,
});
