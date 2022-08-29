import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import {
  createTimeSheet,
  fetchTimeSheetsByProjectId,
} from "../../../../store/timeSheetSlice";
import TopBreadCrumb from "../../../common/layout/breadcrumb/TopBreadCrumb";
import LogAddForm from "./LogAddForm";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";

import TimelineIcon from "@mui/icons-material/Timeline";
import useStyles from "./styles";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import { fetchTasksByProjectId } from "../../../../store/taskSlice";
import HistoryIcon from "@mui/icons-material/History";

const Timesheets = ({ page, pageTitle }) => {
  const classes = useStyles();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { timeSheets, pending, error } = useSelector(
    (state) => state.timeSheet
  );
  const { tasks } = useSelector((state) => state.task);
  const { currentUser } = useSelector((state) => state.user);

  const [title, setTitle] = useState();
  const [task, setTask] = useState();
  const [timesheetId, setTimesheetId] = useState();
  const createdBy = currentUser.username;

  useEffect(() => {
    dispatch(fetchTimeSheetsByProjectId(projectId));
    dispatch(fetchTasksByProjectId(projectId));
  }, [dispatch, projectId]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setOpen(true);
    setTimesheetId(e.target.getAttribute("data-timesheet-id"));
  };

  const handleTimesheetAdd = (e) => {
    e.preventDefault();
    const sendData = { title, task, projectId, createdBy };
    dispatch(createTimeSheet(sendData));
    setTitle("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} projectId={projectId} />
      <Grid container spacing={3}>
        <Grid item md={12}>
          {error && <ErrorAlert message={error} />}
          <Box component={Paper} className={classes.timesheetHeader}>
            <form className={classes.taskAddForm} onSubmit={handleTimesheetAdd}>
              <Grid container spacing={2}>
                <Grid item md={4}>
                  <Box>
                    <FormControl fullWidth>
                      <TextField
                        size="small"
                        id="outlined-select-task"
                        select
                        label="Select a Task"
                        value={task}
                        onChange={handleChange}
                        required
                        inputProps={{ "data-cy": "select-a-task" }}
                      >
                        {tasks &&
                          tasks.map((task, index) => (
                            <MenuItem
                              key={task.id}
                              value={task.title}
                              data-cy={"task-index-" + index}
                            >
                              {task.title}
                            </MenuItem>
                          ))}
                      </TextField>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <TextField
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                    label="Title"
                    type="text"
                    variant="outlined"
                    size="small"
                    inputProps={{ "data-cy": "task-title" }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button
                    variant="contained"
                    margin="normal"
                    startIcon={<TimelineIcon />}
                    type="submit"
                    data-cy="save-timesheet-btn"
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item>
                  <Typography>Total: 43hrs</Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
          <LogAddForm open={open} setOpen={setOpen} timesheetId={timesheetId} />
        </Grid>
      </Grid>
      <TableContainer component={Card} raised>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell>Logs</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pending && (
              <TableRow>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
                <TableCell>
                  <Skeleton />
                </TableCell>
              </TableRow>
            )}
            {!pending &&
              timeSheets.map((timeSheet, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {timeSheet.task}
                  </TableCell>
                  <TableCell>{timeSheet.title}</TableCell>
                  <TableCell align="right">
                    <Button
                      data-timesheet-id={timeSheet.id}
                      size="small"
                      variant="outlined"
                      startIcon={<AddToQueueIcon />}
                      onClick={handleClickOpen}
                      data-cy={`timesheet-${index}-add-btn`}
                    >
                      Add
                    </Button>
                  </TableCell>
                  <TableCell>
                    {timeSheet.logs.map((item, i) => (
                      <Button
                        key={i}
                        size="small"
                        variant="normal"
                        startIcon={<HistoryIcon />}
                      >
                        {item.day} | {item.time}
                      </Button>
                    ))}
                  </TableCell>
                  <TableCell align="right">55</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Timesheets;
