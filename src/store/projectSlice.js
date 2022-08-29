import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/indexByLimit",
  async () => {
    const response = await axios.get(
      "projects-by-limit/24",
    );
    return response.data;
  }
);

export const getProjectById = createAsyncThunk("projects/show", async (id) => {
  const response = await axios.get(
    `projects/${id}`,
  );
  return response.data[0];
});

export const createProject = createAsyncThunk(
  "projects/create",
  async (data) => {
    const response = await axios.post(
      "projects",
      data
    );
    return response.data;
  }
);

export const createProjectComment = createAsyncThunk(
  "projects/comments/create",
  async (data) => {
    const { projectId } = data;
    const sendData = {
      commentBy: data.commentBy,
      comment: data.comment,
    };
    const response = await axios.patch(
      `projects/comments/${projectId}`,
      sendData
    );
    return response.data;
  }
);

export const addProjectAssignees = createAsyncThunk(
  "projects/update/assignees",
  async (data) => {
    const { projectId, assignees } = data;
    const response = await axios.patch(
      `project-assignees/${projectId}`,
      assignees
    );
    return response.data;
  }
);

export const storeProjectBudget = createAsyncThunk(
  "projects/update/budget",
  async (sendData) => {
    const { projectId, budget } = sendData;
    const response = await axios.patch(
      `project-budgets/${projectId}`,
      budget
    );
    return response.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/update/info",
  async (sendData) => {
    const { projectId } = sendData;
    const { data } = sendData;
    const response = await axios.patch(
      `projects/${projectId}`,
      data
    );
    return response.data;
  }
);

export const searchProjects = createAsyncThunk(
  "projects/search",
  async (keyword) => {
    const response = await axios.post(
      `projects-search/${keyword}`
    );
    return response.data;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    project: null,
    projects: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchProjects.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
      state.error = false;
    },
    [fetchProjects.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [searchProjects.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [searchProjects.fulfilled]: (state, action) => {
      state.pending = false;
      state.projects = action.payload;
      state.error = false;
    },
    [searchProjects.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getProjectById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getProjectById.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.error = false;
    },
    [getProjectById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createProject.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createProject.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.projects = [action.payload, ...state.projects];
      state.error = false;
    },
    [createProject.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createProjectComment.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createProjectComment.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.error = false;
    },
    [createProjectComment.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [addProjectAssignees.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [addProjectAssignees.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.error = false;
    },
    [addProjectAssignees.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [storeProjectBudget.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [storeProjectBudget.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.error = false;
    },
    [storeProjectBudget.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [updateProject.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateProject.fulfilled]: (state, action) => {
      state.pending = false;
      state.project = action.payload;
      state.error = false;
    },
    [updateProject.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default projectSlice.reducer;
