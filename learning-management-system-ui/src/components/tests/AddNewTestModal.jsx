import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CoursesModule from "../../services/modules/CoursesModule";
import CreateTest from "../../pages/CreateTest";
import Modall from "../coursespage/Modall";
import TestModule from "../../services/modules/TestModule";
import AddNewQuestion from "./AddNewQuestion";

const validationSchema = yup.object({
  name: yup
    .string("Enter Test Name")
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("This field is required"),
  description: yup
    .string("Enter Test Description")
    .min(8, "Description should be of minimum 8 characters length")
    .required("This field is required"),
  durationInMinutes: yup
    .number("Enter duration in minutes")
    .required("This field is required")
    .min(0)
    .max(999),
  dateOfStart: yup.date().min(new Date()),
  dateOfExpiration: yup.date().min(new Date()),
});

const AddNewTestModal = ({ subject, AddNewTest, setAddNewTest }) => {
  const formik = useFormik({
    initialValues: {
      dateOfStart: new Date(),
      dateOfExpiration: new Date(),
      name: "",
      description: "",
      durationInMinutes: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values["subjectId"] = subject.id;
      setAddNewTest(false);
      let response = await TestModule.CreateTest(values);
      setTestState(response.data);
      setAddNewQuestionState(true);
      console.log(response.data);
    },
  });
  const [AddNewQuestionState, setAddNewQuestionState] = React.useState(false);
  const [testState, setTestState] = React.useState(subject);

  return (
    <Box>
      <Dialog
        open={AddNewTest}
        onClose={() => setAddNewTest(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={true}
        scroll="body"
      >
        <DialogTitle>Create new test for "{subject.name}" subject</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Test name"
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
              label="Test Description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              sx={{ m: 1 }}
            />

            <TextField
              id="durationInMinutes"
              name="durationInMinutes"
              label="Duration in Minutes"
              value={formik.values.durationInMinutes}
              onChange={formik.handleChange}
              error={
                formik.touched.durationInMinutes &&
                Boolean(formik.errors.durationInMinutes)
              }
              helperText={
                formik.touched.durationInMinutes &&
                formik.errors.durationInMinutes
              }
              sx={{ m: 1 }}
            />
            <Box
              sx={{ display: "flex", m: 1, justifyContent: "space-between" }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{ mt: 1, mr: 1 }}>
                  <DateTimePicker
                    id="dateOfStart"
                    name="dateOfStart"
                    label="Date Of Start"
                    value={formik.values.dateOfStart}
                    onChange={(newValue) => {
                      formik.setFieldValue("dateOfStart", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={
                          formik.touched.dateOfStart &&
                          Boolean(formik.errors.dateOfStart)
                        }
                        helperText={
                          formik.touched.dateOfStart &&
                          formik.errors.dateOfStart
                        }
                      />
                    )}
                  />
                </Box>
                <Box sx={{ mt: 1, ml: 1 }}>
                  <DateTimePicker
                    id="dateOfExpiration"
                    name="dateOfExpiration"
                    label="Date Of Expiration"
                    value={formik.values.dateOfExpiration}
                    onChange={(newValue) => {
                      formik.setFieldValue("dateOfExpiration", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        error={
                          formik.touched.dateOfExpiration &&
                          Boolean(formik.errors.dateOfExpiration)
                        }
                        helperText={
                          formik.touched.dateOfExpiration &&
                          formik.errors.dateOfExpiration
                        }
                      />
                    )}
                  />
                </Box>
              </LocalizationProvider>
            </Box>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Button
                onClick={() => setAddNewTest(false)}
                color="primary"
                variant="contained"
              >
                Cancel
              </Button>
              <Tooltip title="Create test and add new Question">
                <Button
                  color="primary"
                  variant="contained"
                  type="submit"
                  autoFocus
                >
                  Next Step
                </Button>
              </Tooltip>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
      <AddNewQuestion
        setAddNewQuestionState={setAddNewQuestionState}
        AddNewQuestionState={AddNewQuestionState}
        testState={testState}
      ></AddNewQuestion>
    </Box>
  );
};

export default AddNewTestModal;
