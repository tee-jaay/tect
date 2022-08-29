import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  chartLoaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "calc(100vh/21)",
  },
  rowsLoaderContainer: {
    width: "20%",
    marginLeft: "20px",
  },
  prioritiesChartContainer: {
    // height: "calc(100vh/2)",
  },
  chart: {
    marginTop: "calc(100vh/21)",
  },
}));
export default useStyles;
