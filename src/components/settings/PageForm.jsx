import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { createPage } from "../../store/pageSlice";
import { useDispatch } from "react-redux";
import moment from "moment";

const PageForm = ({
  pageType: pageTypeDefault,
  title: titleValue,
  subTitle: subTitleValue,
  content: contentValue,
  lastUpdate,
}) => {
  const [title, setTitle] = useState(titleValue);
  const [subTitle, setSubTitle] = useState(subTitleValue);
  const [content, setContent] = useState(contentValue);
  const [pageType, setPageType] = useState(pageTypeDefault);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pageType && title && subTitle && content) {
      const data = {
        pageType,
        title,
        subTitle,
        content,
      };
      dispatch(createPage(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        disabled
        label="Page Type"
        fullWidth
        variant="outlined"
        size="small"
        margin="dense"
        defaultValue={pageType}
        value={pageType}
        onChange={(e) => setPageType(e.target.value)}
        sx={{ display: "none" }}
      />
      <Typography variant="body1" sx={{ marginBottom: "8px" }}>
        Last update: {lastUpdate && moment(lastUpdate).format("LLLL")}
      </Typography>
      <TextField
        label="Title"
        fullWidth
        variant="outlined"
        size="small"
        margin="dense"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        defaultValue={titleValue}
      />
      <TextField
        label="Subtitle"
        fullWidth
        variant="outlined"
        size="small"
        margin="dense"
        value={subTitle}
        onChange={(e) => setSubTitle(e.target.value)}
        defaultValue={subTitleValue}
      />
      <TextField
        label="Content"
        multiline
        fullWidth
        variant="outlined"
        size="small"
        margin="dense"
        rows={16}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        defaultValue={contentValue}
      />
      <Button
        variant="outlined"
        size="small"
        margin="dense"
        sx={{ marginTop: "8px" }}
        type="submit"
      >
        Save
      </Button>
    </form>
  );
};

export default PageForm;
