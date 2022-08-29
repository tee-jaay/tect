import ReactApexChart from "react-apexcharts";
const Chart = () => {
  const config = {
    series: [
      {
        name: "Tasks",
        data: [45, 52, 38, 24, 33, 26, 21, 20],
      },
      {
        name: "Todos",
        data: [35, 41, 62, 42, 13, 18, 29, 37],
      },
      {
        name: "Issues",
        data: [87, 57, 74, 99, 75, 38, 62, 47],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: "straight",
        dashArray: [0, 8, 5],
      },
      title: {
        text: "",
        align: "left",
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            " - " +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ""
          );
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + " (mins)";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + " per session";
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val;
              },
            },
          },
        ],
      },
      grid: {
        borderColor: "#f1f1f1",
      },
    },
  };
  return (
    <>
      <ReactApexChart
        options={config.options}
        series={config.series}
        type="line"
        height={350}
      />
    </>
  );
};

export default Chart;
