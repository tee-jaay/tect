import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    minHeight: "calc(100vh/4)",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    minHeight: "calc(100vh)",
  },
}));

export default useStyles;
