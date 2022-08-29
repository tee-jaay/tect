import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const techIndex = createAsyncThunk(
  "page/homepage/tech/index",
  async () => {
    const response = await axios.get(
      `homepage/library/index`
    );
    return response.data;
  }
);

export const techAdd = createAsyncThunk(
  "page/homepage/tech/add",
  async (data) => {
    const response = await axios.patch(
      `homepage/library/add`,
      data
    );
    return response.data;
  }
);

export const techDelete = createAsyncThunk(
  "page/homepage/tech/destroy",
  async (id) => {
    const response = await axios.delete(
      `homepage/library/destroy/${id}`
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
