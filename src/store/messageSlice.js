import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { MESSAGE_EMAILS_SEND } from "../vars/endpoints.js";

export const sendEmails = createAsyncThunk(
  "project/message/send",
  async (data) => {
    const response = await axios.post(
      MESSAGE_EMAILS_SEND,
      data
    );
    return response.data;
  }
);

export const clearMessage = createAsyncThunk(
  "project/message/clear",
  async () => {
    return null;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: [],
    message: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [sendEmails.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [sendEmails.fulfilled]: (state, action) => {
      state.pending = false;
      state.message = action.payload;
      state.error = false;
    },
    [sendEmails.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [clearMessage.pending]: () => {},
    [clearMessage.fulfilled]: (state) => {
      state.message = null;
    },
    [clearMessage.rejected]: () => {},
  },
});

export default messageSlice.reducer;
