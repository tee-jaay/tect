import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { HOMEPAGE_FEATURE_ADD, HOMEPAGE_SERVER_DESTROY, HOMEPAGE_SERVER_INDEX } from "../vars/endpoints.js";

export const serverIndex = createAsyncThunk(
  "page/homepage/server/index",
  async () => {
    const response = await axios.get(
      HOMEPAGE_SERVER_INDEX
    );
    return response.data;
  }
);

export const serverAdd = createAsyncThunk(
  "page/homepage/server/add",
  async (data) => {
    const response = await axios.patch(
      HOMEPAGE_FEATURE_ADD,
      data
    );
    return response.data;
  }
);

export const serverDelete = createAsyncThunk(
  "page/homepage/server/destroy",
  async (id) => {
    const response = await axios.delete(
      `${HOMEPAGE_SERVER_DESTROY}/${id}`
    );
    return response.data;
  }
);

export const serverSlice = createSlice({
  name: "server",
  initialState: {
    servers: [],
    server: null,
    serverPending: false,
    error: null,
    pending: false,
  },
  reducers: {},
  extraReducers: {
    [serverIndex.pending]: (state) => {
      state.serverPending = true;
      state.error = false;
    },
    [serverIndex.fulfilled]: (state, action) => {
      state.serverPending = false;
      state.servers = action.payload;
      state.error = false;
    },
    [serverIndex.rejected]: (state) => {
      state.serverPending = false;
      state.error = true;
    },

    [serverAdd.pending]: (state) => {
      state.serverPending = true;
      state.error = false;
    },
    [serverAdd.fulfilled]: (state, action) => {
      state.serverPending = false;
      state.servers = [...state.servers, action.payload];
      state.error = false;
    },
    [serverAdd.rejected]: (state) => {
      state.serverPending = false;
      state.error = true;
    },

    [serverDelete.pending]: (state) => {
      state.serverPending = true;
      state.error = false;
    },
    [serverDelete.fulfilled]: (state, action) => {
      state.serverPending = false;
      state.servers = state.servers.filter(
        (item) => item._id !== action.payload
      );
      state.error = false;
    },
    [serverDelete.rejected]: (state) => {
      state.serverPending = false;
      state.error = true;
    },
  },
});

export default serverSlice.reducer;
