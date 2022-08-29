import axios from "axios";

var uploadUrl = `${process.env.REACT_APP_CLOUDINARY_BASE}/${process.env.REACT_APP_CLOUDINARY_VERSION}/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/${process.env.REACT_APP_CLOUDINARY_UPLOAD_ENDPOINT}`;
var presetName = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME}`;
var cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`;

export const uploadImage = (imageValue, folder) => {
  var uploadedImgUrl = "";
  let formData = new FormData();
  formData.append("cloud_name", cloudName);
  formData.append("upload_preset", presetName);
  formData.append("file", imageValue);
  formData.append("folder", `stasks/${folder}`);

  axios
    .post(uploadUrl, formData)
    .then((res) => {
      uploadedImgUrl = res.data.secure_url;
    })
    .catch((err) => console.error(err));
  return uploadedImgUrl;
};
