import axios from "axios";

export const sendImageToCloudinary = (data, endpoint) => {
  axios
    .post(`${process.env.REACT_APP_API_HOST}/${endpoint}`, data)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  return true;
};
