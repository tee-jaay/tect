import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  pageHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
    marginTop: "12px",
  },
  breadcrumb: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  projectDetailsNav: {
    display: "flex",
    alignItems: "center",
  },
  pageTitle: {
    alignSelf: "end",
  },
  dashboardPageHeader: {
    display: "flex",
  },
}));

export default useStyles;
