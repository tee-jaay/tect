import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getChatMessagesByTaskId = createAsyncThunk(
  "chat/byTask",
  async (taskId) => {
    const response = await axios.get(
      `tasks/chat/${taskId}`
    );
    return response.data;
  }
);

export const taskChatSlice = createSlice({
  name: "taskChat",
  initialState: {
    chatMessages: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getChatMessagesByTaskId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getChatMessagesByTaskId.fulfilled]: (state, action) => {
      state.pending = false;
      state.chatMessages = [...state.chatMessages, action.payload];
      state.error = false;
    },
    [getChatMessagesByTaskId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default taskChatSlice.reducer;
