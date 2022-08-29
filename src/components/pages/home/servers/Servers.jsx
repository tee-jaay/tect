import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Grid, Paper, Typography } from "@mui/material";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import useStyles from "../styles";

const Servers = ({ servers, pending, error }) => {
  const classes = useStyles();
  const timeLineConnector = (n) => {
    if (servers.length !== n + 1) {
      return <TimelineConnector />;
    }
  };

  const showServers = () => {
    return servers.map((server, index) => (
      <TimelineItem key={server._id}>
        <TimelineSeparator>
          <TimelineDot />
          {timeLineConnector(index)}
        </TimelineSeparator>
        <TimelineContent>{server.name}</TimelineContent>
      </TimelineItem>
    ));
  };

  return (
    <Grid container className={classes.serversContainer} component={Paper}>
      <Grid item md={12}>
        <Typography variant="h4">Deployed using</Typography>
        {error && <ErrorAlert message={error} />}
        <Timeline position="alternate">
          {!error && !pending && servers && showServers()}
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default Servers;
