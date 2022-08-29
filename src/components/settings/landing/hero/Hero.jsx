import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { updateHomepage } from "../../../../store/homePageSlice";
import ErrorAlert from "../../../common/alert/ErrorAlert";
import ContentLoader from "../../../common/loader/ContentLoader";

const Hero = () => {
  const dispatch = useDispatch();
  const { homePage, pending, error } = useSelector((state) => state.homePage);
  const [image, setImage] = useState(null);

  const handleUpload = () => {
    if (image) {
      var data = new FormData();
      data.append("image", image);
      dispatch(updateHomepage(data));
    }
  };

  const pendingButtons = () => {
    return (
      <Box sx={{ flexDirection: "row", justifyItems: "space-between" }}>
        <Button
          startIcon={<AddPhotoAlternateTwoToneIcon />}
          size="small"
          variant="outlined"
          component="label"
          margin="dense"
          sx={{ marginY: "16px" }}
          disabled
        >
          Select
          <input id="logoImg" type="file" hidden />
        </Button>
        <Button
          disabled
          variant="contained"
          size="small"
          endIcon={<CloudUploadIcon />}
          sx={{ marginLeft: "12px" }}
        >
          Upload
        </Button>
      </Box>
    );
  };

  const imageSelectUpload = () => {
    return (
      <Box sx={{ flexDirection: "row", justifyItems: "space-between" }}>
        <Button
          startIcon={<AddPhotoAlternateTwoToneIcon />}
          size="small"
          variant="outlined"
          component="label"
          margin="dense"
          value={image}
          onChange={(e) => setImage(e.target.files[0])}
          sx={{ marginY: "16px" }}
        >
          Select
          <input id="logoImg" type="file" hidden />
        </Button>
        <Button
          variant="contained"
          size="small"
          endIcon={<CloudUploadIcon />}
          onClick={handleUpload}
          sx={{ marginLeft: "12px" }}
        >
          Upload
        </Button>
      </Box>
    );
  };

  return (
    <Box sx={{ flexDirection: "column" }}>
      <Typography variant="body1" sx={{ marginY: "4px" }}>
        Home Logo
      </Typography>
      <Box>
        {error && <ErrorAlert message={error} />}

        {pending ? pendingButtons() : imageSelectUpload()}

        {pending ? (
          <ContentLoader />
        ) : (
          <Box>
            {homePage?.[0]?.logo && (
              <img
                src={homePage?.[0]?.logo}
                alt=""
                style={{ maxHeight: "120px", maxWidth: "200px" }}
              />
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Hero;
