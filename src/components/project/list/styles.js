import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    paddingTop: "8px !important",
  },
  projectCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "stretch",
    width: "100%",
  },
}));
export default useStyles;
