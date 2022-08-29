import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import ProjectDetailNavTabs from "./projectDetailNavTabs.jsx/ProjectDetailNavTabs";

const TopBreadCrumb = ({ page, pageTitle, projectId, userId }) => {
  const classes = useStyles();

  const { data } = useSelector((state) => state.dashboard);

  return (
    <div className={classes.pageHeader}>
      <Breadcrumbs
        aria-label="breadcrumb"
        className={classes.breadcrumb}
        sx={{ padding: "0.5em" }}
      >
        <Link
          underline="hover"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          color="inherit"
          href="/#/dashboard"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Link>

        {page === "projects" && (
          <span>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
              href="/#/projects"
            >
              <AccountTreeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Projects
            </Typography>
          </span>
        )}

        {page === "projects-create" && (
          <span>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              color="text.primary"
              href="/#/projects"
            >
              <AccountTreeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Projects
            </Typography>
          </span>
        )}

        {page === "projects-details" && (
          <div className={classes.projectDetailsNav}>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/#/projects"
            >
              <AccountTreeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Projects
            </Link>
            <LabelImportantIcon sx={{ mx: 0.5 }} fontSize="inherit" />{" "}
            {projectId && projectId}
          </div>
        )}

        {page === "users" && (
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GroupWorkIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Users
          </Typography>
        )}

        {page === "user-details" && (
          <div className={classes.projectDetailsNav}>
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center" }}
              color="inherit"
              href="/#/users"
            >
              <GroupWorkIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Users
            </Link>
            <LabelImportantIcon sx={{ mx: 0.5 }} fontSize="inherit" />
            {userId && userId}
          </div>
        )}

        {page === "profile" && (
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <PersonPinIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Profile
          </Typography>
        )}
      </Breadcrumbs>

      <Typography variant="subtitle1" gutterBottom>
        {page === "projects-details" && projectId && (
          <ProjectDetailNavTabs
            pending={""}
            projectId={projectId && projectId}
          />
        )}
        {page === "users" && pageTitle}

        {page === "MailBox" && pageTitle}

        {page === "projects" && (
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            <Button
              sx={{ display: "flex", alignItems: "center" }}
              color="success"
              variant="outlined"
              size="small"
              component={Link}
              href="/#/projects/create"
              data-cy="project-create"
            >
              <AddToQueueIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              New
            </Button>
          </Breadcrumbs>
        )}

        {page === "projects-create" && pageTitle}
      </Typography>

      {page === "dashboard" && data && (
        <Typography variang="subtitle2">
          <span>Today: {data.today}</span>
        </Typography>
      )}
    </div>
  );
};

export default TopBreadCrumb;
