const ProjectEdit = () => {
  // let uploadUrl = `${process.env.REACT_APP_CLOUDINARY_BASE}/${process.env.REACT_APP_CLOUDINARY_VERSION}/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/${process.env.REACT_APP_CLOUDINARY_UPLOAD_ENDPOINT}`;
  // let presetName = `${process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME}`;
  // let cloudName = `${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}`;

  // const uploadImage = (img) => {
  //   const formData = new FormData();
  //   formData.append("file", img);
  //   formData.append("cloud_name", cloudName);
  //   formData.append("folder", "stasks/project");
  //   formData.append("upload_preset", presetName);
  //   console.log("uploading...");

  //   const options = {
  //     method: "POST",
  //     body: formData,
  //   };

  //   return fetch(uploadUrl, options)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.secure_url);
  //       console.log("uploaded!");
  //     })
  //     .catch((err) => console.log(err));
  // };

  return <>project edit</>;
};

export default ProjectEdit;
