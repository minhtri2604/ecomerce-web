import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./cart.state";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.dataCart = action.payload.dataCart;
    },
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.dataCart.find(
        (product) => product.id === productToAdd.id
      );

      if (existingProduct) {
        existingProduct.quantity += productToAdd.quantity;
      } else {
        state.dataCart.push(productToAdd);
      }

      localStorage.setItem("cartProducts", JSON.stringify(state.dataCart));
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.dataCart = state.dataCart.filter(
        (item) => item.id !== itemIdToRemove
      );
      localStorage.setItem("cartProducts", JSON.stringify(state.dataCart));
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const product = state.dataCart.find((p) => p.id === productId);
      if (product) {
        product.quantity = quantity;
        localStorage.setItem("cartProducts", JSON.stringify(state.dataCart));
      }
    },
  },
});

export const { setCart, addToCart, removeFromCart, updateQuantity } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
