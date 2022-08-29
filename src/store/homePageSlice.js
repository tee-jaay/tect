import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHomePage = createAsyncThunk("page/homepage/index", async () => {
  const response = await axios.get(
    "homepage"
  );
  return response.data;
});

export const updateHomepage = createAsyncThunk(
  "page/homepage/image",
  async (sendData) => {
    console.log(sendData);
    const response = await axios.patch(
      "homepage/update",
      sendData
    );
    return response.data;
  }
);

export const homePageSlice = createSlice({
  name: "homePage",
  initialState: {
    homePage: null,
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [updateHomepage.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateHomepage.fulfilled]: (state, action) => {
      state.homePage = null;
      state.pending = false;
      state.homePage = [action.payload];
      state.error = false;
    },
    [updateHomepage.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getHomePage.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getHomePage.fulfilled]: (state, action) => {
      state.pending = false;
      state.homePage = [action.payload];
      state.error = false;
    },
    [getHomePage.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default homePageSlice.reducer;
