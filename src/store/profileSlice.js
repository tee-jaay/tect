import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProfileByUserId = createAsyncThunk(
  "profiles/detail",
  async (userId) => {
    const response = await axios.get(
      `profiles/user/${userId}`
    );
    return response.data;
  }
);

export const profileSlice = createSlice({
  name: "profileState",
  initialState: {
    profile: null,
    profiles: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getProfileByUserId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getProfileByUserId.fulfilled]: (state, action) => {
      state.pending = false;
      state.profile = action.payload;
      state.error = false;
    },
    [getProfileByUserId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default profileSlice.reducer;
