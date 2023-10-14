import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./comment.state";

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setComment: (state, action) => {
      state.dataComment = action.payload.dataComment;
    },
    setInvoice: (state, action) => {
      state.dataInvoice = action.payload.dataInvoice;
    },
    setAddress: (state, action) => {
      state.dataAddress = action.payload.dataAddress;
    },
  },
});

export const { setComment, setInvoice, setAddress } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;
