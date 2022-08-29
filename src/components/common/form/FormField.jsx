import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import FormErrorMessage from "../messages/FormErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextField
        onBlur={() => setFieldTouched(name)}
        onChange={() => handleChange(name)}
        {...otherProps}
      />
      <FormErrorMessage error={errors[name]} show={touched[name]} />
    </>
  );
};

export default AppFormField;
