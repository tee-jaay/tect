import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Layout } from "./components/importExportRoutes";
import "./App.css";

import PageLoader from "./components/common/loader/LottieLoader";

const LazyHome = React.lazy(() => import("./components/pages/home/Home"));
const LazyPrivacyPolicy = React.lazy(() =>
  import("./components/pages/privacy-policy/PrivacyPolicy")
);
const LazyTermsOfService = React.lazy(() =>
  import("./components/pages/terms-of-service/TermsOfService")
);
const LazyGdpr = React.lazy(() => import("./components/pages/gdpr/Gdpr"));
const LazyDisclaimer = React.lazy(() =>
  import("./components/pages/disclaimer/Disclaimer")
);
const LazyPasswordResetRequest = React.lazy(() =>
  import("./components/auth/PasswordResetRequest")
);
const LazySaveNewPassword = React.lazy(() =>
  import("./components/auth/SaveNewPassword")
);
const LazySignUp = React.lazy(() => import("./components/auth/SignUp"));
const LazySignIn = React.lazy(() => import("./components/auth/SignIn"));
const LazyDashboard = React.lazy(() =>
  import("./components/dashboard/Dashboard")
);
const LazyProjectList = React.lazy(() =>
  import("./components/project/list/List")
);
const LazyProjectCreate = React.lazy(() =>
  import("./components/project/create/Create")
);
const LazyProjectEdit = React.lazy(() =>
  import("./components/project/edit/Edit")
);
const LazyProjectDetailInfo = React.lazy(() =>
  import("./components/project/detail/info/Info")
);
const LazyProjectDetailTasks = React.lazy(() =>
  import("./components/project/detail/task/Tasks")
);
const LazyProjectDetailIssues = React.lazy(() =>
  import("./components/project/detail/issue/Issues")
);
const LazyProjectDetailTimesheets = React.lazy(() =>
  import("./components/project/detail/timesheet/Timesheets")
);
const LazyProjectDetailMeetings = React.lazy(() =>
  import("./components/project/detail/meeting/Meetings")
);
const LazyUserList = React.lazy(() => import("./components/user/List"));
const LazyUserDetail = React.lazy(() => import("./components/user/Detail"));
const LazyUserEdit = React.lazy(() => import("./components/user/Edit"));

const LazyProfile = React.lazy(() => import("./components/profile/Profile"));
const LazySettings = React.lazy(() => import("./components/settings/Settings"));
const LazyMailBox = React.lazy(() => import("./components/mail/MailBox"));
const LazyMailBoxCreateMail = React.lazy(() =>
  import("./components/mail/create/CreateMail")
);
const LazyLanding = React.lazy(() =>
  import("./components/settings/landing/Landing")
);

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `'Montserrat', sans-serif`,
      fontSize: 12,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      primary: {
        light: "#81c784",
        main: "#4caf50",
        dark: "#388e3c",
        contrastText: "#FFFFFF",
      },
      secondary: {
        light: "#ffb74d",
        main: "#ff9800",
        dark: "#f57c00",
        contrastText: "#444444",
      },
    },
  });
  return (
    <ThemeProvider theme={THEME}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <React.Suspense fallback={<PageLoader />}>
              <LazyHome />
            </React.Suspense>
          </Route>
          <Route exact path="/privacy-policy">
            <React.Suspense fallback={<PageLoader />}>
              <LazyPrivacyPolicy />
            </React.Suspense>
          </Route>
          <Route exact path="/terms-of-service">
            <React.Suspense fallback={<PageLoader />}>
              <LazyTermsOfService />
            </React.Suspense>
          </Route>
          <Route exact path="/gdpr">
            <React.Suspense fallback={<PageLoader />}>
              <LazyGdpr />
            </React.Suspense>
          </Route>
          <Route exact path="/disclaimer">
            <React.Suspense fallback={<PageLoader />}>
              <LazyDisclaimer />
            </React.Suspense>
          </Route>
          <Route exact path="/auth/password-reset-request">
            <React.Suspense fallback={<PageLoader />}>
              <LazyPasswordResetRequest />
            </React.Suspense>
          </Route>
          <Route exact path="/auth/save-new-password">
            <React.Suspense fallback={<PageLoader />}>
              <LazySaveNewPassword />
            </React.Suspense>
          </Route>
          <Route exact path="/auth/sign-up">
            <React.Suspense fallback={<PageLoader />}>
              <LazySignUp />
            </React.Suspense>
          </Route>
          <Route exact path="/auth/sign-in">
            <React.Suspense fallback={<PageLoader />}>
              <LazySignIn />
            </React.Suspense>
          </Route>

          <Layout>
            <Route exact path="/dashboard">
              <React.Suspense fallback={<PageLoader />}>
                <LazyDashboard
                  page={"dashboard"}
                  pageTitle={"Hi, Welcome back!"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectList
                  page={"projects"}
                  pageTitle={"Latest Projects"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/create">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectCreate
                  page={"projects-create"}
                  pageTitle={"Create a Project"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/edit">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectEdit />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/info">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectDetailInfo
                  page={"projects-details"}
                  pageTitle={"Info"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/tasks">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectDetailTasks
                  page={"projects-details"}
                  pageTitle={"Tasks"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/issues">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectDetailIssues
                  page={"projects-details"}
                  pageTitle={"Issues"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/timesheets">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectDetailTimesheets
                  page={"projects-details"}
                  pageTitle={"Timesheets"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/projects/:projectId/meetings">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProjectDetailMeetings
                  page={"projects-details"}
                  pageTitle={"Meetings"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/users">
              <React.Suspense fallback={<PageLoader />}>
                <LazyUserList page={"users"} pageTitle={"All Users"} />
              </React.Suspense>
            </Route>

            <Route exact path="/users/:userId">
              <React.Suspense fallback={<PageLoader />}>
                <LazyUserDetail
                  page={"user-details"}
                  pageTitle={"About User"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/users/:userId/edit">
              <React.Suspense fallback={<PageLoader />}>
                <LazyUserEdit />
              </React.Suspense>
            </Route>

            <Route exact path="/profile">
              <React.Suspense fallback={<PageLoader />}>
                <LazyProfile page={"profile"} pageTitle={"Your Profile"} />
              </React.Suspense>
            </Route>

            <Route exact path="/settings">
              <React.Suspense fallback={<PageLoader />}>
                <LazySettings page={"Seetings"} pageTitle={"Settings"} />
              </React.Suspense>
            </Route>

            <Route exact path="/settings/landing">
              <React.Suspense fallback={<PageLoader />}>
                <LazyLanding
                  page={"Seetings Landing"}
                  pageTitle={"Settings Landing"}
                />
              </React.Suspense>
            </Route>

            <Route exact path="/mailbox">
              <React.Suspense fallback={<PageLoader />}>
                <LazyMailBox page={"MailBox"} pageTitle={"Mail Box"} />
              </React.Suspense>
            </Route>

            <Route exact path="/mailbox/create">
              <React.Suspense fallback={<PageLoader />}>
                <LazyMailBoxCreateMail
                  page={"mailbox-create"}
                  pageTitle={"Mail Create"}
                />
              </React.Suspense>
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
