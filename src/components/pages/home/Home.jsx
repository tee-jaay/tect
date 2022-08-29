import { useEffect } from "react";
import Hero from "./Hero/Hero";
import { useDispatch, useSelector } from "react-redux";
import { getSiteData } from "../../../store/frontendSlice";
import { techIndex } from "../../../store/techSlice";
import useStyles from "./styles";
// import FooterLinks from "../footer-links/FooterLinks";
// import About from "./About/About";
// import Feature from "./Feature/Feature";
// import Tech from "./Tech/Tech";
// import Copyright from "./Copyright/Copyright";
// import Tools from "./tools/Tools";
// import Servers from "./servers/Servers";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { siteDataArr, error, pending } = useSelector(
    (state) => state.frontend
  );

  useEffect(() => {
    dispatch(getSiteData());
    dispatch(techIndex());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Hero
        logo={siteDataArr && siteDataArr[0]?.homepage[0].logo}
        pending={pending}
        error={error}
      />
    </div>
  );
};

export default Home;
