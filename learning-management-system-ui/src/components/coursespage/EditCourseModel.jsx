import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import CoursesModule from "../../services/modules/CoursesModule";

const validationSchema = yup.object({
  startedAt: yup.date().min(new Date()),

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

export default function EditCoursesModel({ setOpen, setErrors, cours, setCours }) {
  const [isDisabled, setDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      startedAt: cours.startedAt,
      name: cours.name,
      description: cours.description,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => { 
      setDisabled(true); 
      setErrors([]);  
       
      let data = {...cours, ...values};

       data = JSON.stringify(data, null, 2);
      let response = await CoursesModule.putCoursbyID(cours.id, data);
      if (response.errors === null) {
        
        setCours(response.data);
        setOpen(false);
      } else {
        setErrors(response.errors);
      }
      setDisabled(false);
      console.log(response);
    },
  });

  return (
    <Box width="100%" height="100%">
      <h1>Edit Cours</h1>
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
          <Button
            disabled={isDisabled}
            onClick={()=>setOpen(false)}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            disabled={isDisabled}
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
