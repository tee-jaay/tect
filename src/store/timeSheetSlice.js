import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTimeSheetsByProjectId = createAsyncThunk(
  "timeSheets/byProject",
  async (projectId) => {
    const response = await axios.get(
      `timeSheets/project/${projectId}`
    );
    return response.data;
  }
);

export const getTimeSheetById = createAsyncThunk(
  "timeSheets/one",
  async (id) => {
    const response = await axios.get(
      `timeSheets/${id}`
    );
    return response.data[0];
  }
);

export const createTimeSheet = createAsyncThunk(
  "timeSheets/add",
  async (data) => {
    const response = await axios.post(
      `timeSheets`,
      data
    );
    return response.data;
  }
);

export const updateTimeSheet = createAsyncThunk(
  "timeSheets/update",
  async (data) => {
    const response = await axios.patch(
      `timeSheets`,
      data
    );
    return response.data;
  }
);

export const timeSheetSlice = createSlice({
  name: "timeSheet",
  initialState: {
    timeSheet: null,
    timeSheets: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTimeSheetsByProjectId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchTimeSheetsByProjectId.fulfilled]: (state, action) => {
      state.pending = false;
      state.timeSheets = action.payload;
      state.error = false;
    },
    [fetchTimeSheetsByProjectId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getTimeSheetById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getTimeSheetById.fulfilled]: (state, action) => {
      state.pending = false;
      state.timeSheet = action.payload;
      state.error = false;
    },
    [getTimeSheetById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createTimeSheet.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createTimeSheet.fulfilled]: (state, action) => {
      state.pending = false;
      state.timeSheet = action.payload;
      state.timeSheets = [action.payload, ...state.timeSheets];
      state.error = false;
    },
    [createTimeSheet.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [updateTimeSheet.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateTimeSheet.fulfilled]: (state, action) => {
      let oldTimeSheets = state.timeSheets.filter(
        (item) => item.id !== action.payload.id
      );
      state.pending = false;
      state.timeSheet = action.payload;
      state.timeSheets = [action.payload, ...oldTimeSheets];
      state.error = false;
    },
    [updateTimeSheet.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default timeSheetSlice.reducer;
