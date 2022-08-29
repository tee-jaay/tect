import { makeStyles } from "@mui/styles";
import ProfileMenu from "./profileMenu/ProfileMenu";
import Notification from "./notification/Notification";
import RightSearch from "./search/Search";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    display: "flex",
    alignItems: "center",
  },
}));

const RightSection = () => {
  const location = useLocation();
  const classes = useStyles();

  const showSearch = () => {
    if (location.pathname === "/projects") {
      return <RightSearch />;
    }
    return null;
  };
  return (
    <>
      <div className={classes.sectionContainer}>
        {showSearch()}
        <Notification />
        <ProfileMenu />
      </div>
    </>
  );
};

export default RightSection;
