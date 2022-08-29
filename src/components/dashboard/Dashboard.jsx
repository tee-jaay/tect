import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Divider, Grid, Paper } from "@mui/material";
import { getDashboardData } from "../../store/dashboardSlice";
import TopBreadCrumb from "../common/layout/breadcrumb/TopBreadCrumb";
import Charts from "./charts/Charts";
import StatCards from "./statcards/StatCards";
import useStyles from "./styles";
import RecentProjects from "./recentProjects/RecentProjects";
import LatestOpenedIssues from "./latestOpenedIssues/LatestOpenedIssues";
import OnlineUsers from "./onlineUsers/OnlineUsers";

const Dashboard = ({ page, pageTitle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, pending } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboardData());
  }, [dispatch]);
  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />

      <Grid container spacing={3} className={classes.root}>
        <Grid item sm={8}>
          <StatCards
            projects={data && data.allProjectsCount}
            tasks={data && data.allTasksCount}
            issues={data && data.allIssuesCount}
            meetings={data && data.allMeetingsCount}
            pending={pending}
            className={classes.statCards}
          />
        </Grid>
        <Grid item sm={4}>
          <RecentProjects
            recentProjects={data && data.recentProjects}
            pending={pending}
          />
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: "16px", borderColor: "transparent" }} />
      <Charts priorityArr={data && data.priorities} pending={pending} />
      <Divider sx={{ marginBottom: "16px", borderColor: "transparent" }} />
      <Grid container spacing={3} className={classes.latestIssueUsers}>
        <Grid item sm={8}>
          <Paper>
            <LatestOpenedIssues
              latestOpenIssues={data && data.latestOpenIssues}
              pending={pending}
            />
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper>
            <OnlineUsers users={data && data.users} pending={pending} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
