import { Chip, Divider, Grid, Typography } from "@mui/material";

const Credit = () => {
  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h4" sx={{ textAlign: "center", my: "64px" }}>
          App name from
        </Typography>
        <Divider>
          <Chip label="namelix" />
        </Divider>
      </Grid>
    </Grid>
  );
};

export default Credit;
