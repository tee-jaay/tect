import { Card, CardContent, Grid, Typography } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import useStyles from "./styles";

const config = {
  series: [
    {
      name: "Review",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Active",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Cancelled",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
    {
      name: "Completed",
      data: [53, 15, 56, 36, 85, 28, 62, 33, 81],
    },
    {
      name: "Not Started",
      data: [33, 65, 36, 86, 45, 78, 42, 13, 58],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " tasks";
        },
      },
    },
  },
};

const TaskStatus = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={7} md={7}>
        <Card className={classes.statusChartContainer} raised>
          <CardContent>
            <Typography variant="h6" component="h6">
              Tasks Status
            </Typography>
            <ReactApexChart
              options={config.options}
              series={config.series}
              type="bar"
              height={350}
            />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default TaskStatus;
