import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert, Button, Grid, Portal, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import CoursesModule from "../../services/modules/CoursesModule";

export default async function DelleteModal({ setOpen, cours }) {
  //let data = JSON.stringify(values, null, 2);
  let data = "";
    let response = await CoursesModule.putCoursbyID(cours.id, data);
  debugger;
  if (response.errors === null) {
    setOpen(false);
  } else {
    //setErrors(response.errors);
  }
  console.log(response);

  return (
    <Box width="100%" height="100%">
      <h1>You want Change Course Status(isActive/is not Active)?</h1>
      
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Button color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>

    </Box>
  );
}
