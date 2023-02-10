import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PAGES } from "../vars/endpoints.js";

export const getPages = createAsyncThunk("page/index", async () => {
  const response = await axios.get(PAGES);
  return response.data;
});

export const createPage = createAsyncThunk("page/create", async (sendData) => {
  const response = await axios.post(
    PAGES,
    sendData
  );
  return response.data;
});

export const updatePage = createAsyncThunk("page/update", async (sendData) => {
  const response = await axios.patch(
    PAGES,
    sendData
  );
  return response.data;
});

export const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: null,
    pages: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getPages.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getPages.fulfilled]: (state, action) => {
      state.pending = false;
      state.pages = [action.payload];
      state.error = false;
    },
    [getPages.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createPage.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createPage.fulfilled]: (state, action) => {
      state.pending = false;
      state.page = [...state.pages, action.payload];
      state.error = false;
    },
    [createPage.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [updatePage.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updatePage.fulfilled]: (state, action) => {
      state.pending = false;
      state.page = [...state.pages, action.payload];
      state.error = false;
    },
    [updatePage.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default pageSlice.reducer;
