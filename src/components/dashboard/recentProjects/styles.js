import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  latestProjectsLoaderContainer: {
    padding: "16px 8px",
  },
  latestProjects: {
    marginLeft: "1.8rem",
    padding: "16px",
    backgroundColor: "white",
    height: "92%",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  latestProjectsList: {
    display: "flex",
    flexDirection: "column",
    "& .MuiBox-root": {
      minHeight: "300px",
      "& .MuiSkeleton-root": {
        marginBottom: "8px",
      },
    },
  },
  latestProjectsItem: {
    marginBottom: "8px",
    lineHeight: "1.2rem",
    "& a": {
      display: "flex",
      alignItems: "center",
      textDecoration: "none !important",
      color: "inherit !important",
      fontSize: "1rem !important",
    },
  },
}));
export default useStyles;
