import { Card, CardContent, CircularProgress, Grid, Typography } from "@mui/material";

import {
  UilBug,
  UilClipboardNotes,
  UilParcel,
  UilMeetingBoard,
} from "@iconscout/react-unicons";

import useStyles from "./styles";

const StatCard = ({ value, icon, subtitle, color }) => {
  const classes = useStyles();

  const setIcon = (icon) => {
    if (icon === "parcel") return <UilParcel />;
    if (icon === "task") return <UilClipboardNotes />;
    if (icon === "event") return <UilMeetingBoard />;
    if (icon === "bug") return <UilBug />;
  };

  const setItemColorClass = (color) => {
    if (color === "green") return classes.cardItemGreen;
    if (color === "blue") return classes.cardItemBlue;
    if (color === "yellow") return classes.cardItemYellow;
    if (color === "pink") return classes.cardItemPink;
  };

  return (
    <>
      <Grid item md={3} sm={6} xs={12}>
        <Card
          raised
          square
          className={classes.cardItem + " " + setItemColorClass(color)}
        >
          <CardContent>
            <div className={classes.cardItemIconWrapper}> {icon ? setIcon(icon) : <CircularProgress size="1rem" color={"info"} />}</div>
            <Typography variant="h3" className={classes.cardItemTitle}>
              {value}
            </Typography>
            <Typography
              variant="subtitle2"
              component="h4"
              className={classes.cardItemSubTitle}
            >
              {subtitle}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default StatCard;
