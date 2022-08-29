import { useState } from "react";
import { Button, Typography } from "@mui/material";
import { statusChip } from "../../../../../helpers/DataDisplay";
import EditOffTwoToneIcon from "@mui/icons-material/EditOffTwoTone";
import useStyles from "./styles";
import TitleImageDescriptionForm from "./TitleImageDescriptionForm";

const TitleImageDescription = ({ title, image, status, description }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showEditBtn, setShowEditBtn] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div
      onMouseEnter={() => setShowEditBtn(true)}
      onMouseLeave={() => setShowEditBtn(false)}
      data-cy="title-image-desc-container"
    >
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          paddingBottom: "12px",
        }}
        data-cy="project-title-value"
      >
        {title}
        {showEditBtn && (
          <Button
            startIcon={<EditOffTwoToneIcon />}
            size="small"
            variant="outlined"
            onClick={handleClickOpen}
            style={{ position: "absolute", right: 0 }}
            data-cy="title-img-desc-edit-btn"
          >
            edit
          </Button>
        )}
      </Typography>
      <TitleImageDescriptionForm
        open={open}
        setOpen={setOpen}
        title={title}
        description={description}
        status={status}
      />
      <div
        className={classes.projectImageContainer}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <span className={classes.statusChip}>
          {statusChip("project", status)}
        </span>
      </div>
      <br />

      <Typography
        variant="body2"
        component="div"
        gutterBottom
        data-cy="project-description-value"
      >
        {description}
      </Typography>
    </div>
  );
};

export default TitleImageDescription;
