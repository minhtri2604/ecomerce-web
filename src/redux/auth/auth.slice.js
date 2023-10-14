import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./auth.state";
import { getInfoUser } from "../../services/api";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.infoUser = action.payload.infoUser;
    },
  },
});

export const { setAuth } = authSlice.actions;

// Thunk để gọi API và cập nhật Redux store
export const infoUser = () => async (dispatch) => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const infoUser = await getInfoUser();

      dispatch(
        setAuth({
          accessToken: accessToken,
          infoUser: infoUser?.data?.data,
        })
      );
    }
  } catch (error) {
    console.log(error);
    localStorage.removeItem("accessToken");
  }
};

export const authReducer = authSlice.reducer;
