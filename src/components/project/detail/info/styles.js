import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  circularProgressContainer: {
    height: "calc(100vh/4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  boxStyles: {
    padding: "10px 12px",
    marginBottom: "12px",
  },
}));

export default useStyles;
