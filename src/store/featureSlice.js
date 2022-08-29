import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const featureIndex = createAsyncThunk(
  "page/homepage/feature/index",
  async () => {
    const response = await axios.get(
      "homepage/feature/index"
    );
    return response.data;
  }
);

export const featureAdd = createAsyncThunk(
  "page/homepage/feature/add",
  async (data) => {
    console.log(data);
    const response = await axios.patch(
      "homepage/feature/add",
      data
    );
    return response.data;
  }
);

export const featureSlice = createSlice({
  name: "feature",
  initialState: {
    features: [],
    feature: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [featureIndex.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [featureIndex.fulfilled]: (state, action) => {
      state.pending = false;
      state.features = action.payload;
      state.error = false;
    },
    [featureIndex.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [featureAdd.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [featureAdd.fulfilled]: (state, action) => {
      state.pending = false;
      state.features = [...state.features, action.payload];
      state.error = false;
    },
    [featureAdd.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default featureSlice.reducer;
