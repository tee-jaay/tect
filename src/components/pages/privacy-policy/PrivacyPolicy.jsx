import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderMarkup } from "react-render-markup";
import { getPages } from "../../../store/pageSlice";
import FrontLayout from "../front-layout/FrontLayout";

const PrivacyPolicy = () => {
  const dispatch = useDispatch();
  const { siteDataArr } = useSelector((state) => state.frontend);

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  return (
    <FrontLayout>
      <Typography variant={"h3"}>
        {siteDataArr && siteDataArr?.[0]?.[1].title}
      </Typography>
      {siteDataArr ? renderMarkup(siteDataArr?.[0]?.[1].content) : "..."}
    </FrontLayout>
  );
};

export default PrivacyPolicy;
