import { Grid } from "@mui/material";
import TaskStatus from "./taskStatus/TaskStatus";
import useStyles from "./styles";
import TaskPriority from "./taskPriority/TaskPriority";

const Charts = ({ priorityArr, pending }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} spacing={3}>
        <TaskStatus pending={pending} />
        <TaskPriority priorityArr={priorityArr} pending={pending} />
      </Grid>
    </>
  );
};

export default Charts;
