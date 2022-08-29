import { Card, CardContent, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReactApexChart from "react-apexcharts";
import useStyles from "./styles";

const TaskPriority = ({ priorityArr, pending }) => {
  const classes = useStyles();

  const config = {
    series: priorityArr,
    options: {
      labels: ["Low", "Medium", "High", "Critical"],
      chart: {
        type: "polarArea",
      },
      stroke: {
        colors: ["#fff"],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              //   width: 200
              // height: 350,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <>
      <Grid item xs={12} sm={5} md={5}>
        <Card className={classes.prioritiesChartContainer} raised>
          <CardContent>
            <Typography variant="h6" component="h6">
              Tasks Priorities
            </Typography>
            {pending && (
              <Box className={classes.chartLoaderContainer}>
                <Skeleton variant="circular" width={240} height={240} />
                <div className={classes.rowsLoaderContainer}>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
              </Box>
            )}
            {!pending && priorityArr && (
              <ReactApexChart
                options={config.options}
                series={config.series}
                type="polarArea"
                className={classes.chart}
              />
            )}
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TaskPriority;
