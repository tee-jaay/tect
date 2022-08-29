import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "8px",
  },
  textField: {
    width: "100%",
  },
  subTitle: {
    fontSize: "14px",
  },
  circularProgressContainer: {
    height: "calc(100vh/4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
