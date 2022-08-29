import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Card, Skeleton, Typography } from "@mui/material";
import { recentProjectStatus } from "../../../helpers/DataDisplay";
import useStyles from "./styles";

const RecentProjects = ({ recentProjects, pending }) => {
  const classes = useStyles();

  return (
    <Card className={classes.latestProjects} raised>
      <Typography variant="h6" gutterBottom>
        Latest Projects
      </Typography>
      {pending && (
        <div className={classes.latestProjectsLoaderContainer}>
          <Box>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton />
            <Skeleton animation={false} />
            <Skeleton />
          </Box>
        </div>
      )}
      <div className={classes.latestProjectsList}>
        {!pending &&
          recentProjects &&
          recentProjects.map((item, index) => (
            <div className={classes.latestProjectsItem} key={index}>
              <Link to={`/projects/${item.id}/info`}>
                <Typography
                  variant="subtitle2"
                  style={{
                    borderLeft: `5px solid ${recentProjectStatus(item.status)}`,
                    paddingLeft: "8px",
                  }}
                >
                  {item.title.substr(0, 28) + " ..."}
                </Typography>
              </Link>
            </div>
          ))}
      </div>
    </Card>
  );
};

export default RecentProjects;
