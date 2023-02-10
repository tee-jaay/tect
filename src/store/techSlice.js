import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { HOMEPAGE_LIBRARY_ADD, HOMEPAGE_LIBRARY_DESTROY, HOMEPAGE_LIBRARY_INDEX } from "../vars/endpoints.js";

export const techIndex = createAsyncThunk(
  "page/homepage/tech/index",
  async () => {
    const response = await axios.get(
      HOMEPAGE_LIBRARY_INDEX
    );
    return response.data;
  }
);

export const techAdd = createAsyncThunk(
  "page/homepage/tech/add",
  async (data) => {
    const response = await axios.patch(
      HOMEPAGE_LIBRARY_ADD,
      data
    );
    return response.data;
  }
);

export const techDelete = createAsyncThunk(
  "page/homepage/tech/destroy",
  async (id) => {
    const response = await axios.delete(
      `${HOMEPAGE_LIBRARY_DESTROY}/${id}`
    );
    return response.data;
  }
);

export const techSlice = createSlice({
  name: "tech",
  initialState: {
    techs: [],
    tech: null,
    techPending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [techIndex.pending]: (state) => {
      state.techPending = true;
      state.error = false;
    },
    [techIndex.fulfilled]: (state, action) => {
      state.techPending = false;
      state.techs = action.payload;
      state.error = false;
    },
    [techIndex.rejected]: (state) => {
      state.techPending = false;
      state.error = true;
    },

    [techAdd.pending]: (state) => {
      state.techPending = true;
      state.error = false;
    },
    [techAdd.fulfilled]: (state, action) => {
      state.techPending = false;
      state.techs = [...state.techs, action.payload];
      state.error = false;
    },
    [techAdd.rejected]: (state) => {
      state.techPending = false;
      state.error = true;
    },

    [techDelete.pending]: (state) => {
      state.techPending = true;
      state.error = false;
    },
    [techDelete.fulfilled]: (state, action) => {
      state.techPending = false;
      state.techs = state.techs.filter((item) => item.id !== action.payload);
      state.error = false;
    },
    [techDelete.rejected]: (state) => {
      state.techPending = false;
      state.error = true;
    },
  },
});

export default techSlice.reducer;
