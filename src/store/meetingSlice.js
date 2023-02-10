import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PROJECTS_MEETINGS, PROJECTS_MEETINGS_COMMENTS } from "../vars/endpoints.js";

export const fetchMeetingsByProjectId = createAsyncThunk(
  "meetings/byProject",
  async (projectId) => {
    const response = await axios.get(
      `${PROJECTS_MEETINGS}/${projectId}`
    );
    return response.data;
  }
);

export const getIssueById = createAsyncThunk("meetings/show", async (id) => {
  const response = await axios.get(
    `meetings/${id}`
  );
  return response.data[0];
});

export const createMeeting = createAsyncThunk(
  "meetings/create",
  async (data) => {
    const response = await axios.post(
      PROJECTS_MEETINGS,
      data
    );
    return response.data;
  }
);

export const createMeetingComment = createAsyncThunk(
  "meetings/create",
  async (data) => {
    const response = await axios.patch(
      `${PROJECTS_MEETINGS_COMMENTS}/${data.meetingId}`,
      data
    );
    return response.data;
  }
);

export const meetingSlice = createSlice({
  name: "meeting",
  initialState: {
    meeting: null,
    meetings: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchMeetingsByProjectId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchMeetingsByProjectId.fulfilled]: (state, action) => {
      state.pending = false;
      state.meetings = action.payload;
      state.error = false;
    },
    [fetchMeetingsByProjectId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getIssueById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getIssueById.fulfilled]: (state, action) => {
      state.pending = false;
      state.meeting = action.payload;
      state.error = false;
    },
    [getIssueById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createMeeting.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createMeeting.fulfilled]: (state, action) => {
      state.pending = false;
      state.meeting = action.payload;
      state.meetings = [...state.meetings, action.payload];
      state.error = false;
    },
    [createMeeting.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createMeetingComment.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createMeetingComment.fulfilled]: (state, action) => {
      let oldMeetings = state.meetings.filter(
        (item) => item.id !== action.payload.id
      );
      state.pending = false;
      state.meeting = action.payload;
      state.meetings = [action.payload, ...oldMeetings];
      state.error = false;
    },
    [createMeetingComment.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default meetingSlice.reducer;
