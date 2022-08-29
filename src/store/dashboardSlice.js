import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDashboardData = createAsyncThunk(
  "dashboard/index",
  async () => {
    const response = await axios.get(
      "dashboard"
    );
    return response.data;
  }
);

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getDashboardData.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getDashboardData.fulfilled]: (state, action) => {
      state.pending = false;
      state.data = action.payload;
      state.error = false;
    },
    [getDashboardData.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default dashboardSlice.reducer;
