import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import { updateProject } from "../../../../../store/projectSlice";

const TitleImageDescriptionForm = ({
  open,
  setOpen,
  title,

  description,
  status,
}) => {
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [statusValue, setStatusValue] = useState(status);
  const [imgUrl, setImgUrl] = useState();

  const [progress, setProgress] = useState(0);

  const [imageValue, setImageValue] = useState();

  const handleClose = () => {
    if (titleValue || descriptionValue || statusValue || imgUrl) {
      let sendData = {
        projectId: projectId,
        data: {
          title: titleValue,
          description: descriptionValue,
          status: statusValue,
          image: imgUrl,
        },
      };
      dispatch(updateProject(sendData));
    }
    setOpen(false);
  };

  var uploadUrl = `${process.env.REACT_APP_CLOUDINARY_BASE}/${process.env.REACT_APP_CLOUDINARY_VERSION}/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/${process.env.REACT_APP_CLOUDINARY_UPLOAD_ENDPOINT}`;
  var presetName = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME}`;
  var cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`;

  if (imageValue) {
    let formData = new FormData();
    formData.append("file", imageValue);
    formData.append("cloud_name", cloudName);
    formData.append("folder", "stasks/project");
    formData.append("upload_preset", presetName);
    console.log("uploading...");

    axios
      .post(uploadUrl, formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgress(progress);
        },
      })
      .then((res) => setImgUrl(res.data.secure_url))
      .catch((err) => console.error(err));
    setImageValue(null);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          size="small"
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="outlined"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          inputProps={{ "data-cy": "title" }}
        />
        <TextField
          size="small"
          margin="dense"
          id="description"
          label="Description"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows="2"
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          inputProps={{ "data-cy": "description" }}
        />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12px",
          }}
        >
          <div>
            <Button
              startIcon={<AddPhotoAlternateTwoToneIcon />}
              size="small"
              variant="contained"
              component="label"
              margin="dense"
              value={imageValue}
              onChange={(e) => setImageValue(e.target.files[0])}
              data-cy="image-upload-btn"
            >
              Image
              <input type="file" hidden data-cy="project-image-input" />
            </Button>
            <span style={{ marginLeft: "8px" }}>
              {progress.length > 0 && progress}
            </span>
          </div>
          <div>
            <FormControl fullWidth className="status-form">
              <Select
                sx={{ width: "150px !important" }}
                label="Status"
                id="status"
                size="small"
                variant="standard"
                defaultValue={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
                inputProps={{ "data-cy": "status-select" }}
              >
                <MenuItem value={"active"} data-cy="status-active">
                  Active
                </MenuItem>
                <MenuItem value={"cancelled"} data-cy="status-cancelled">
                  Cancelled
                </MenuItem>
                <MenuItem value={"completed"} data-cy="status-completed">
                  Completed
                </MenuItem>
                <MenuItem value={"review"} data-cy="status-review">
                  Review
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Box sx={{ padding: "16px 0 16px 0" }}>
          {imgUrl && (
            <img
              src={imgUrl}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose} data-cy="title-desc-img-save-btn">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TitleImageDescriptionForm;
