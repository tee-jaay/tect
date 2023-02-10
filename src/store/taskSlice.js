import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PROJECTS_TASKS, PROJECTS_TASKS_CHAT } from "../vars/endpoints.js";

// get all tasks
export const fetchTasksByProjectId = createAsyncThunk(
  "tasks/byProject",
  async (projectId) => {
    const response = await axios.get(
      `${PROJECTS_TASKS}/${projectId}`
    );
    return response.data;
  }
);
// get task by id
export const getTaskById = createAsyncThunk("tasks/detail", async (taskId) => {
  const response = await axios.get(
    `${PROJECTS_TASKS}/${taskId}`
  );
  return response.data[0];
});
// store a task
export const createTask = createAsyncThunk("tasks/create", async (data) => {
  const response = await axios.post(
    PROJECTS_TASKS,
    data
  );
  await axios.post(`${PROJECTS_TASKS_CHAT}/${response.data.id}`, { taskId: response.data.id, createdBy: response.data.createdBy, message: "Welcome to tasks chat", filePath: "" });
  return response.data;
});
// Update a task
export const updateTask = createAsyncThunk("tasks/update", async (data) => {
  const response = await axios.patch(
    `${PROJECTS_TASKS}/${data.taskId}`,
    data
  );

  return response.data;
});

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: null,
    tasks: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // Index by project id
    [fetchTasksByProjectId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchTasksByProjectId.fulfilled]: (state, action) => {
      state.pending = false;
      state.tasks = action.payload;
      state.error = false;
    },
    [fetchTasksByProjectId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    // Show
    [getTaskById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getTaskById.fulfilled]: (state, action) => {
      state.pending = false;
      state.task = action.payload;
      state.error = false;
    },
    [getTaskById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    //Store
    [createTask.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createTask.fulfilled]: (state, action) => {
      state.pending = false;
      state.tasks = [action.payload, ...state.tasks];
      state.error = false;
    },
    [createTask.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    //Update
    [updateTask.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateTask.fulfilled]: (state, action) => {
      let oldTasks = state.tasks.filter(
        (item) => item.id !== action.payload.updatedTask.id
      );
      state.pending = false;
      state.task = action.payload.updatedTask;
      state.tasks = [...oldTasks, action.payload.updatedTask];
      state.error = false;
    },
    [updateTask.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default taskSlice.reducer;
