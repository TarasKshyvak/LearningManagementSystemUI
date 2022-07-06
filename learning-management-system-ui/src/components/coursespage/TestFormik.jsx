import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import CoursesModule from "../../services/modules/CoursesModule";

const validationSchema = yup.object({
  startedAt: yup
  .date().min(new Date()),

  name: yup
    .string("Enter Course Name")
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("This field is required"),
  description: yup
    .string("Enter Course Description")
    .min(8, "Description should be of minimum 8 characters length")
    .required("Course Description is required"),
});

const WithMaterialUI = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      startedAt: new Date(),
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let data = JSON.stringify(values, null, 2);
      CoursesModule.CreateCours(data);
      handleClose();
    },
  });
  const [value, setValue] = React.useState(null);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Course Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          sx={{ m: 1 }}
        />
        <TextField
          fullWidth
          multiline
          id="description"
          name="description"
          label="Course Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
          sx={{ m: 1 }}
        />
        <Box sx={{ m: 1 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              id="startedAt"
              name="startedAt"
              label="Basic example"
              value={formik.values.startedAt}
              onChange={(newValue) => {
                formik.setFieldValue("startedAt", newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={
                    formik.touched.startedAt && Boolean(formik.errors.startedAt)
                  }
                  helperText={
                    formik.touched.startedAt && formik.errors.startedAt
                  }
                />
              )}
            />
          </LocalizationProvider>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};
export default WithMaterialUI;
