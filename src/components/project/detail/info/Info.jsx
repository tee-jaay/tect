import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CircularProgress, Container, Grid, Paper } from "@mui/material";
import Chart from "./chart/Chart";
import Budget from "./budget/Budget";
import Assignees from "./assignee/Assignees";
import useStyles from "./styles";
import Comments from "./comment/Comments";
import { Box } from "@mui/system";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import TitleImageDescription from "./titleImageDescription/TitleImageDescription";
import Sources from "./source/Sources";
import Dates from "./Dates/Dates";
import TopBreadCrumb from "../../../common/layout/breadcrumb/TopBreadCrumb";
import { getProjectById } from "../../../../store/projectSlice";
import Contact from "./contact/Contact";

const Info = ({ page, pageTitle }) => {
  const classes = useStyles();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { project, pending, error } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(getProjectById(projectId));
  }, [dispatch, projectId]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} projectId={projectId} />
      <Grid container spacing={3}>
        <Grid item sm={6}>
          {/* Title, image, description */}
          {pending && !project ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              {project && (
                <TitleImageDescription
                  title={project.title}
                  image={project.image}
                  status={project.status}
                  description={project.description}
                />
              )}
            </Box>
          )}
          {/* Budget */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              <Budget
                projectId={project && project.id}
                budget={project && project.budget[0]}
              />
            </Box>
          )}
          {/* Assignees */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              <Assignees project={project} pending={pending} error={error} />
            </Box>
          )}
          {/* Communication */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              <Contact />
            </Box>
          )}
          {/* Project Sources */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              {project && (
                <Sources
                  projectId={project && project.id}
                  repoLink={project.repoLink}
                  urlOne={project.urlOne}
                  urlTwo={project.urlTwo}
                />
              )}
            </Box>
          )}
          {/* Date */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box component={Paper} className={classes.boxStyles}>
              {project && (
                <Dates
                  createdBy={project.createdBy}
                  createdAt={project.createdAt}
                  updatedAt={project.updatedAt}
                />
              )}
            </Box>
          )}
        </Grid>
        {/* Chart */}
        <Grid item sm={6}>
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              <Chart />
            </Box>
          )}
          {/* Comments / Chat */}
          {pending ? (
            <div className={classes.circularProgressContainer}>
              <CircularProgress size={32} />
            </div>
          ) : (
            <Box
              component={Card}
              className={classes.boxStyles}
              raised
              sx={{ paddingY: "24px" }}
            >
              <Comments
                pending={pending}
                comments={project && project.comments}
                projectId={projectId}
              />
            </Box>
          )}
        </Grid>
        {error && <ErrorAlert message={error} />}
      </Grid>
    </Container>
  );
};

export default Info;
