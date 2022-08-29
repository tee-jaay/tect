import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../../../store/pageSlice";
import { renderMarkup } from "react-render-markup";
import { Typography } from "@mui/material";
import FrontLayout from "../front-layout/FrontLayout";

const TermsOfService = () => {
  const dispatch = useDispatch();
  const { siteDataArr } = useSelector((state) => state.frontend);

  useEffect(() => {
    dispatch(getPages());
  }, [dispatch]);

  return (
    <FrontLayout>
      <Typography variant={"h3"}>
        {siteDataArr && siteDataArr?.[0]?.[4].title}
      </Typography>
      {siteDataArr ? renderMarkup(siteDataArr?.[0]?.[4].content) : "..."}
    </FrontLayout>
  );
};

export default TermsOfService;
