import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { HOMEPAGE_TOOL_ADD, HOMEPAGE_TOOL_INDEX } from "../vars/endpoints.js";

export const toolIndex = createAsyncThunk(
  "page/homepage/tool/index",
  async () => {
    const response = await axios.get(
      HOMEPAGE_TOOL_INDEX
    );
    return response.data;
  }
);

export const toolAdd = createAsyncThunk(
  "page/homepage/tool/add",
  async (data) => {
    const response = await axios.patch(
      HOMEPAGE_TOOL_ADD,
      data
    );
    return response.data;
  }
);

export const toolSlice = createSlice({
  name: "tool",
  initialState: {
    tools: [],
    tool: null,
    pending: null,
    toolPending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [toolIndex.pending]: (state) => {
      state.pending = true;
      state.toolPending = true;
      state.error = false;
    },
    [toolIndex.fulfilled]: (state, action) => {
      state.pending = false;
      state.toolPending = false;
      state.tools = action.payload;
      state.error = false;
    },
    [toolIndex.rejected]: (state) => {
      state.toolPending = false;
      state.pending = false;
      state.error = true;
    },

    [toolAdd.pending]: (state) => {
      state.toolPending = true;
      state.pending = true;
      state.error = false;
    },
    [toolAdd.fulfilled]: (state, action) => {
      state.toolPending = false;
      state.pending = false;
      state.tools = [...state.tools, action.payload];
      state.error = false;
    },
    [toolAdd.rejected]: (state) => {
      state.toolPending = false;
      state.pending = false;
      state.error = true;
    },
  },
});

export default toolSlice.reducer;
