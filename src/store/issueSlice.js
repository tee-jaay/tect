import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchIssuesByProjectId = createAsyncThunk(
  "issues/byProject",
  async (projectId) => {
    const response = await axios.get(
      `issues/project/${projectId}`
    );
    return response.data;
  }
);

export const getIssueById = createAsyncThunk("issues/show", async (id) => {
  const response = await axios.get(
    `issues/${id}`
  );
  return response.data[0];
});

export const createIssue = createAsyncThunk("issues/create", async (data) => {
  const { projectId } = data;
  const response = await axios.post(
    `issues/${projectId}`,
    data
  );
  return response.data;
});

export const updateIssue = createAsyncThunk("issues/update", async (data) => {
  const issueId = data.theIssueId;
  const sendData = {
    commentBy: data.commentBy,
    text: data.text,
  };
  const response = await axios.patch(
    `issues/comments/${issueId}`,
    sendData
  );
  return response.data;
});

export const issueSlice = createSlice({
  name: "issue",
  initialState: {
    issue: null,
    issues: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchIssuesByProjectId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchIssuesByProjectId.fulfilled]: (state, action) => {
      state.pending = false;
      state.issues = action.payload;
      state.error = false;
    },
    [fetchIssuesByProjectId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getIssueById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getIssueById.fulfilled]: (state, action) => {
      state.pending = false;
      state.issue = action.payload;
      state.error = false;
    },
    [getIssueById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createIssue.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createIssue.fulfilled]: (state, action) => {
      state.pending = false;
      state.issue = action.payload;
      state.issues = [action.payload, ...state.issues];
      state.error = false;
    },
    [createIssue.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    },

    [updateIssue.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateIssue.fulfilled]: (state, action) => {
      let oldIssues = state.issues.filter(
        (item) => item.id !== action.payload.id
      );
      state.pending = false;
      state.issues = [action.payload, ...oldIssues];
      state.error = false;
    },
    [updateIssue.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default issueSlice.reducer;
