import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  Container,
  Card,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksByProjectId } from "../../../../store/taskSlice";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import TopBreadCrumb from "../../../common/layout/breadcrumb/TopBreadCrumb";
import TaskAdd from "./add/TaskAdd";
import TaskList from "./list/TaskList";
import useStyles from "./styles";

const Tasks = ({ page, pageTitle }) => {
  const classes = useStyles();
  const { projectId } = useParams();
  const dispatch = useDispatch();

  const { tasks, pending, error } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(fetchTasksByProjectId(projectId));
  }, [dispatch, projectId]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} projectId={projectId} />

      <Card raised>
        <TableContainer component={Paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Title</TableCell>
                <TableCell style={{ textAlign: "right" }}>Status</TableCell>
                <TableCell style={{ textAlign: "right" }}>Start Date</TableCell>
                <TableCell style={{ textAlign: "right" }}>End Date</TableCell>
                <TableCell style={{ textAlign: "right" }}>Priority</TableCell>
                <TableCell style={{ textAlign: "right" }}></TableCell>
              </TableRow>
            </TableHead>

            <TableBody className={classes.projectDetailTaskList}>
              <TaskAdd projectId={projectId} />

              <TaskList
                projectId={projectId}
                tasks={tasks}
                pending={pending}
                error={error}
              />

              {error && <ErrorAlert message="Error in fetching Tasks" />}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default Tasks;
