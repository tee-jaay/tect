import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { statusChip } from "../../../helpers/DataDisplay";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../../store/projectSlice";
import ErrorAlert from "../../common/alert/ErrorAlert";
import useStyles from "./styles";
import TopBreadCrumb from "../../common/layout/breadcrumb/TopBreadCrumb";

const ProjectList = ({ page, pageTitle }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { projects, pending, error } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Container>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />
      <Grid container spacing={4} className={classes.projectsContainer}>
        {!pending && projects
          ? projects.map((project, index) => (
              <Grid item md={4} key={index}>
                <Card raised>
                  <CardActionArea>
                    <CardMedia
                      image={project.image}
                      style={{ height: "140px" }}
                      title={project.title}
                    />
                    <CardContent>
                      <Typography variant="subtitle2">
                        {project.title.substring(0, 28)}...
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <div className={classes.projectCard}>
                      <ButtonGroup
                        size="small"
                        variant="text"
                        style={{ flex: "1" }}
                      >
                        <Button
                          component={Link}
                          to={`/projects/${project.id}/info`}
                          color="primary"
                          data-cy-btn={index}
                        >
                          <VisibilityIcon fontSize="small" />
                        </Button>
                      </ButtonGroup>

                      {statusChip("project", project.status)}
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : ""}
        {error && <ErrorAlert message={error} />}
      </Grid>
    </Container>
  );
};

export default ProjectList;
