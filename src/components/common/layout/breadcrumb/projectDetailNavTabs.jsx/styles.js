import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  skeletonItem: {
    alignItems: "center",
    display: "flex",
    width: "100px",
  },
  skeletonCircle: {
    width: "20px",
  },
  skeletonBar: {
    width: "75px",
    marginLeft: "5px",
  },
  root: {
    display: "flex",
    margin: "0 !important",
    "& .Mui-selected": {},
  },
}));

export default useStyles;
