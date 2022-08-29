import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPages = createAsyncThunk("page/index", async () => {
  const response = await axios.get("page");
  return response.data;
});

export const createPage = createAsyncThunk("page/create", async (sendData) => {
  const response = await axios.post(
    "page",
    sendData
  );
  return response.data;
});

export const updatePage = createAsyncThunk("page/update", async (sendData) => {
  const response = await axios.patch(
    "page",
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
