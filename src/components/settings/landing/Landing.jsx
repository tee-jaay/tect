import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import { updateHomepage } from "../../../store/homePageSlice";
import Hero from "./hero/Hero";
import About from "./about/About";
import Feature from "./feature/Feature";
import Tech from "./tech/Tech";
import SystemsTools from "./systems-tools/SystemsTools";
import Servers from "./servers/Servers";
import { featureIndex } from "../../../store/featureSlice";
import { Divider, Grid } from "@mui/material";
import { toolIndex } from "../../../store/toolSlice";
import { techIndex } from "../../../store/techSlice";
import { serverIndex } from "../../../store/serverSlice";

const Landing = () => {
  const dispatch = useDispatch();

  const { techs } = useSelector((state) => state.tech);
  const { servers, serverPending, error } = useSelector(
    (state) => state.server
  );
  const { tools, toolPending } = useSelector((state) => state.tool);
  const [logoImg, setLogoImg] = useState(null);
  const [about, setAbout] = useState("");

  const updateLandingPage = () => {
    const formData = new FormData();
    if (logoImg) {
      formData.append("image", logoImg);
      formData.append("about", about);

      dispatch(updateHomepage(formData));
    }
    setLogoImg(null);
  };

  useEffect(() => {
    dispatch(featureIndex());
    dispatch(toolIndex());
    dispatch(techIndex());
    dispatch(serverIndex());
  }, [dispatch]);

  return (
    <>
      <form>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <Hero
              logoImg={logoImg}
              setLogoImg={setLogoImg}
              updateLandingPage={updateLandingPage}
            />
          </Box>

          <Box sx={{ flex: 2 }}>
            <About
              about={about}
              setAbout={setAbout}
              updateLandingPage={updateLandingPage}
            />
          </Box>
        </Box>

        <Divider sx={{ marginY: "24px" }} />

        <Feature />

        <Divider sx={{ marginY: "24px" }} />
        <Grid container spacing={3}>
          <Grid md={6} item>
            <Tech techs={techs} style={{ flex: 1 }} />
          </Grid>
          <Grid md={6} item>
            <Servers
              servers={servers}
              serverPending={serverPending}
              error={error}
              style={{ flex: 1 }}
            />
          </Grid>
        </Grid>

        <Divider sx={{ marginY: "24px" }} />
        <SystemsTools tools={tools} toolPending={toolPending} />
      </form>
    </>
  );
};

export default Landing;
