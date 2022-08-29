import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodosByTasksId = createAsyncThunk(
  "todos/byTask",
  async (taskId) => {
    const response = await axios.get(
      `todos/task/${taskId}`
    );
    return response.data;
  }
);

export const createTodo = createAsyncThunk("todos/create", async (data) => {
  const response = await axios.post(
    `todos`,
    data
  );
  return response.data;
});

export const updateTodo = createAsyncThunk("todos/update", async (data) => {
  const response = await axios.patch(
    `todos/${data.todoId}`,
    data
  );
  return response.data;
});

export const getTodosById = createAsyncThunk("todos/one", async (id) => {
  const response = await axios.get(
    `todos/${id}`
  );
  return response.data[0];
});

export const destroyTodo = createAsyncThunk("todos/destroy", async (todoId) => {
  const response = await axios.delete(
    `todos/${todoId}`
  );
  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: null,
    todos: [],
    pending: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTodosByTasksId.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getTodosByTasksId.fulfilled]: (state, action) => {
      state.pending = false;
      state.todos = action.payload;
      state.error = false;
    },
    [getTodosByTasksId.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [createTodo.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.pending = false;
      state.todos = [...state.todos, action.payload];
      state.error = false;
    },
    [createTodo.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [updateTodo.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateTodo.fulfilled]: (state, action) => {
      let oldTodos = state.todos.filter(
        (item) => item.id !== action.payload[0].id
      );
      state.pending = false;
      state.todos = [action.payload[0], ...oldTodos];
      state.error = false;
    },
    [updateTodo.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [getTodosById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getTodosById.fulfilled]: (state, action) => {
      state.pending = false;
      state.todo = action.payload;
      state.error = false;
    },
    [getTodosById.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [destroyTodo.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [destroyTodo.fulfilled]: (state, action) => {
      state.pending = false;
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload[0].id
      );
      state.error = false;
    },
    [destroyTodo.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default todoSlice.reducer;
