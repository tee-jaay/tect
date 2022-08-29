import { useSelector } from "react-redux";
import {
  Avatar,
  Chip,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import useStyles from "../styles";
import ErrorAlert from "../../../common/alert/ErrorAlert";

const Tech = () => {
  const classes = useStyles();
  const { techs, pending, error } = useSelector((state) => state.tech);

  const showTechs = () => {
    if (techs.length > 0) {
      return techs.map((item) => (
        <Chip
          key={item._id}
          avatar={<Avatar alt={item.name} src={item.name.substring(0)} />}
          label={item.name}
          variant="outlined"
          sx={{ m: "8px" }}
        />
      ));
    }
  };

  const pendingTechs = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Skeleton width="8%" />
        <Skeleton width="8%" />
        <Skeleton width="8%" />
        <Skeleton width="8%" />
        <Skeleton width="8%" />
        <Skeleton width="8%" />
      </Box>
    );
  };

  return (
    <Container className={classes.techContainer}>
      <Box>
        <Typography variant="h4" className={classes.sectionTitle}>
          Tech Used
        </Typography>
        <div></div>
        <Grid container>
          <Grid item md={12}>
            <div
              style={{
                textAlign: "center",
              }}
            >
              {error && <ErrorAlert message={error} />}
              {pending && pendingTechs()}
              {!error && !pending && techs && showTechs()}
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Tech;
