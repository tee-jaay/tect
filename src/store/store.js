import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import projectReducer from "./projectSlice";
import taskReducer from "./taskSlice";
import userReducer from "./userSlice";
import issueReducer from "./issueSlice";
import meetingReducer from "./meetingSlice";
import timeSheetReducer from "./timeSheetSlice";
import profileReducer from "./profileSlice";
import wallPostReducer from "./wallPostSlice";
import dashboardReducer from "./dashboardSlice";
import pageReducer from "./pageSlice";
import authPageReducer from "./authPageSlice";
import homePageReducer from "./homePageSlice";
import featureReducer from "./featureSlice";
import toolReducer from "./toolSlice";
import techReducer from "./techSlice";
import serverReducer from "./serverSlice";
import frontendReducer from "./frontendSlice";
import messageReducer from "./messageSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    project: projectReducer,
    task: taskReducer,
    user: persistedReducer,
    issue: issueReducer,
    meeting: meetingReducer,
    timeSheet: timeSheetReducer,
    profile: profileReducer,
    dashboard: dashboardReducer,
    wallPost: wallPostReducer,
    page: pageReducer,
    authPage: authPageReducer,
    homePage: homePageReducer,
    feature: featureReducer,
    tool: toolReducer,
    tech: techReducer,
    server: serverReducer,
    frontend: frontendReducer,
    message: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
