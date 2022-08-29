import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Typography } from "@mui/material";
import ImageInput from "./ImageInput";
import { getAuthPages } from "../../../store/authPageSlice";

const Authentication = () => {
  const dispatch = useDispatch();
  const { authPage } = useSelector((state) => state.authPage);

  useEffect(() => {
    dispatch(getAuthPages());
  }, [dispatch]);
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "8px" }}>
        Background image for
      </Typography>
      <ImageInput
        title={"Sign in "}
        value="signIn"
        cloudImgUrl={authPage && authPage[0][0]?.imgUrl}
      />
      <Divider sx={{ marginY: "16px" }} />
      <ImageInput
        title={"Sign up "}
        value="signUp"
        cloudImgUrl={authPage && authPage[0][1]?.imgUrl}
      />
      <Divider sx={{ marginY: "16px" }} />
      <ImageInput
        title={"Password reset request "}
        value="pwdResetReq"
        cloudImgUrl={authPage && authPage[0][2]?.imgUrl}
      />
      <Divider sx={{ marginY: "16px" }} />
      <ImageInput
        title={"Save password "}
        value="savePasswd"
        cloudImgUrl={authPage && authPage[0][3]?.imgUrl}
      />
    </>
  );
};

export default Authentication;
