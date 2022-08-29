import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2px 0",
    width: "100%",
  },
  subTitle: {
    fontSize: "14px",
    borderRadius: "0",
  },
  circularProgressContainer: {
    height: "calc(100vh/4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
