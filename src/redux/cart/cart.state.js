export const initialState = {
  dataCart: JSON.parse(localStorage.getItem("cartProducts")) || [],
};
