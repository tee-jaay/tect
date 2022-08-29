import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import FileUploadTwoToneIcon from "@mui/icons-material/FileUploadTwoTone";
import { useState } from "react";
import axios from "axios";

const ImageInput = ({ title, cloudImgUrl, value }) => {
  const [bgImg, setBgImg] = useState("");
  const [imgFor, setImgFor] = useState(value);
  const [loading, setLoading] = useState(false);

  const uploadImage = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("image", bgImg);
    formData.append("imgFor", imgFor);

    axios
      .post(`${process.env.REACT_APP_API_HOST}/authpage`, formData)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const LoadingImageInputBox = () => {
    return (
      <form>
        <TextField
          disabled
          variant="standard"
          fullWidth
          size="small"
          margin="dense"
          value={imgFor}
        />
        <Box>
          <Button
            disabled
            startIcon={<AddPhotoAlternateTwoToneIcon />}
            size="small"
            variant="outlined"
            component="label"
            margin="dense"
            sx={{ marginY: "16px" }}
          >
            Select
            <input id="logoImg" type="file" hidden />
          </Button>
          <Button
            disabled
            size="small"
            endIcon={<FileUploadTwoToneIcon />}
            variant="contained"
            sx={{ marginX: "16px" }}
          >
            Upload
          </Button>
        </Box>
      </form>
    );
  };

  const ImageInputBox = () => {
    return (
      <form onSubmit={uploadImage} encType="multipart/form-data">
        <TextField
          value={imgFor}
          onChange={(e) => setImgFor(e.target.value)}
          defaultValue={value}
          variant="standard"
          fullWidth
          size="small"
          margin="dense"
          disabled
          sx={{ display: "none" }}
        />
        <Box>
          <Button
            startIcon={<AddPhotoAlternateTwoToneIcon />}
            size="small"
            variant="outlined"
            component="label"
            margin="dense"
            value={bgImg}
            onChange={(e) => setBgImg(e.target.files[0])}
            sx={{ marginY: "16px" }}
          >
            Select
            <input id="logoImg" type="file" hidden />
          </Button>
          <Button
            size="small"
            endIcon={<FileUploadTwoToneIcon />}
            variant="contained"
            sx={{ marginX: "16px" }}
            type="submit"
          >
            Upload
          </Button>
        </Box>
      </form>
    );
  };

  return (
    <Box sx={{ marginY: "12px" }}>
      <Typography variant="h6">{title}</Typography>
      <Grid container spacing={3}>
        <Grid item md={5}>
          <Box>{loading ? <LoadingImageInputBox /> : <ImageInputBox />}</Box>
        </Grid>
        <Grid item md={7}>
          <Box>
            <img
              src={cloudImgUrl && cloudImgUrl}
              alt=""
              style={{ width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageInput;
