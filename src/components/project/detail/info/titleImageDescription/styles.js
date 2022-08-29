import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectImageContainer: {
    backgroundRepeat: "no-repeat",
    height: "calc(100vh/4)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
  },
  statusChip: {
    marginLeft: "auto",
    paddingTop: "12px",
    paddingRight: "12px",
    "& div": {
      backgroundColor: "#FFFFFF",
    },
  },
}));

export default useStyles;
