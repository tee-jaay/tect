import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Paper, TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import TopBreadCrumb from "../../common/layout/breadcrumb/TopBreadCrumb";
import { createProject } from "../../../store/projectSlice";
import useStyles from "./styles";
import FormErrorMessage from "../../common/messages/FormErrorMessage";

const ProjectCreate = ({ page, pageTitle }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, pending } = useSelector((state) => state.project);
  const { currentUser } = useSelector((state) => state.user);

  let createdBy = currentUser.username;

  const schema = Yup.object().shape({
    title: Yup.string().required().min(3).label("Title"),
    description: Yup.string().min(6).label("Description"),
    repoLink: Yup.string().url().label("Repository Link"),
    urlOne: Yup.string().url().label("URL 1"),
    urlTwo: Yup.string().url().label("URL 2"),
    image: Yup.string().url().label("Image"),
  });

  return (
    <>
      <TopBreadCrumb page={page} pageTitle={pageTitle} />
      <Formik
        initialValues={{
          title: "",
          description: "",
          repoLink: "",
          urlOne: "",
          urlTwo: "",
          createdBy,
        }}
        onSubmit={(values) => {
          dispatch(createProject(values));
          history.push("/projects");
        }}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Paper className={classes.formFieldsContainer}>
                    <TextField
                      label="Title"
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      onChange={handleChange("title")}
                      onBlur={() => setFieldTouched("title")}
                      inputProps={{ "data-cy": "title" }}
                    />
                    <FormErrorMessage
                      error={errors.title}
                      show={touched.title}
                    />

                    <TextField
                      label="Description"
                      variant="outlined"
                      size="small"
                      multiline
                      rows="3"
                      fullWidth
                      margin="dense"
                      onChange={handleChange("description")}
                      onBlur={() => setFieldTouched("description")}
                      inputProps={{ "data-cy": "description" }}
                    />
                    <FormErrorMessage
                      error={errors.description}
                      show={touched.description}
                    />

                    <TextField
                      onChange={handleChange("repoLink")}
                      onBlur={() => setFieldTouched("repoLink")}
                      label="Repository Link"
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      type="url"
                      inputProps={{ "data-cy": "repository-link" }}
                    />

                    <FormErrorMessage
                      error={errors.repoLink}
                      show={touched.repoLink}
                    />

                    <TextField
                      onChange={handleChange("urlOne")}
                      onBlur={() => setFieldTouched("urlOne")}
                      label="URL 1"
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      type="url"
                      inputProps={{ "data-cy": "url-one" }}
                    />
                    <FormErrorMessage
                      error={errors.urlOne}
                      show={touched.urlOne}
                    />

                    <TextField
                      onChange={handleChange("urlTwo")}
                      onBlur={() => setFieldTouched("urlTwo")}
                      label="URL 2"
                      variant="outlined"
                      size="small"
                      fullWidth
                      margin="dense"
                      type="url"
                      inputProps={{ "data-cy": "url-two" }}
                    />
                    <FormErrorMessage
                      error={errors.urlTwo}
                      show={touched.urlTwo}
                    />

                    <Button
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "6px",
                      }}
                      color="success"
                      variant="contained"
                      type="submit"
                      data-cy="saveBtn"
                    >
                      <SaveIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Save
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </form>
          </>
        )}
      </Formik>

      {!pending && error && error}
    </>
  );
};

export default ProjectCreate;
