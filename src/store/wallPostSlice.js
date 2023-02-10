import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { USERS_SOCIALS_WALL_POSTS } from "../vars/endpoints.js";

export const getWallPostsByUserId = createAsyncThunk(
  "profiles/wall-posts/index",
  async (userId) => {
    const response = await axios.get(
      `${USERS_SOCIALS_WALL_POSTS}/${userId}`
    );
    return response.data;
  }
);

export const createWallPostByUserId = createAsyncThunk(
  "profiles/wall-posts/create",
  async (data) => {
    const { userId } = data;
    const response = await axios.post(
      `${USERS_SOCIALS_WALL_POSTS}/${userId}`,
      data
    );
    return response.data;
  }
);

export const wallPostSlice = createSlice({
  name: "wallPostState",
  initialState: {
    wallPost: null,
    wallPosts: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getWallPostsByUserId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getWallPostsByUserId.fulfilled]: (state, action) => {
      state.pending = false;
      state.wallPosts = action.payload;
      state.error = false;
    },
    [getWallPostsByUserId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createWallPostByUserId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createWallPostByUserId.fulfilled]: (state, action) => {
      state.pending = false;
      state.wallPosts = [action.payload, ...state.wallPosts];
      state.error = false;
    },
    [createWallPostByUserId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default wallPostSlice.reducer;
