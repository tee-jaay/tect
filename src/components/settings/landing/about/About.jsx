import { Box, Skeleton, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateHomepage } from "../../../../store/homePageSlice";
import ErrorAlert from "../../../common/alert/ErrorAlert";

const About = ({ about, setAbout }) => {
  const dispatch = useDispatch();
  const { homePage, error, pending } = useSelector((state) => state.homePage);

  const sendAboutData = () => {
    if (about.length > 5) {
      let data = {
        about: about,
      };
      dispatch(updateHomepage(data));
    }
  };

  return (
    <Box
      sx={{
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Typography variant="body1" sx={{ marginY: "4px" }}>
        About
      </Typography>
      {error && <ErrorAlert message={error} />}

      <TextField
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        onBlur={sendAboutData}
        multiline
        rows="1"
        fullWidth
        label="About"
        variant="outlined"
        margin="dense"
        size="small"
      />
      {pending ? (
        <>
          <Skeleton sx={{ width: "100%" }} />
          <Skeleton sx={{ width: "50%" }} />
          <Skeleton sx={{ width: "70%" }} />
        </>
      ) : (
        <Typography variant="body2">
          {homePage && homePage?.[0]?.about?.substring(0, 250)}
        </Typography>
      )}
    </Box>
  );
};

export default About;
