import { Card, Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useStyles from "../styles";
import ErrorAlert from "../../../common/alert/ErrorAlert";

const Feature = ({ features, pending, error }) => {
  const classes = useStyles();

  const showFeatures = () => {
    if (features) {
      return features.map((feature) => (
        <Grid item md={3} key={feature._id}>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={feature.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.content.substring(0, 100)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ));
    }
  };

  const pendingFeatures = () => {
    return (
      <Grid item md={3}>
        <Card>
          <CardMedia>
            <Skeleton height={140} />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Skeleton animation="false" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Skeleton height={100} />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div className={classes.featureContainer}>
      <Box>
        <Typography variant="h4" className={classes.sectionTitle}>
          Features
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          spacing={4}
          className={classes.cardContainer}
          sx={{ justifyContent: "center" }}
        >
          {error && <ErrorAlert message={error} />}
          {pending && pendingFeatures()}
          {pending && pendingFeatures()}
          {pending && pendingFeatures()}
          {pending && pendingFeatures()}
          {!error && !pending && showFeatures()}
        </Grid>
      </Container>
    </div>
  );
};

export default Feature;
