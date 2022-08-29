import { Avatar, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import useStyles from "../styles.js";

const Tools = ({ tools, pending, error }) => {
  const classes = useStyles();

  const pendingTool = () => {
    return (
      <Box>
        <Skeleton height={96} width={96} variant="circular" animation="false" />
        <Skeleton animation="wave" sx={{ marginTop: "24px" }} />
      </Box>
    );
  };

  return (
    <Grid container className={classes.systemToolsContainer}>
      <Grid item md={12}>
        <Typography variant="h4" sx={{ my: "48px", textAlign: "center" }}>
          Systems & Tools
        </Typography>
        <Box className={classes.systemTools}>
          {error && <ErrorAlert message={error} />}
          {pending && pendingTool()}
          {pending && pendingTool()}
          {pending && pendingTool()}
          {pending && pendingTool()}

          {!error &&
            !pending &&
            tools &&
            tools.map((tool) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={tool.name}
                  src={tool.image}
                  sx={{ width: 96, height: 96 }}
                />
                <Typography
                  component="p"
                  variant="body1"
                  sx={{ marginTop: "24px" }}
                >
                  {tool.name}
                </Typography>
              </Box>
            ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Tools;
