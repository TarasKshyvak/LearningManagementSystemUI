import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import CoursesModule from "../../services/modules/CoursesModule";


const DeleteCourseModel = () => {
    return (
        <div>
            <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </div>
    );
};

export default DeleteCourseModel;
