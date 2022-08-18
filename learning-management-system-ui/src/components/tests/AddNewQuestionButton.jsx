import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import * as yup from "yup";
import AddIcon from "@mui/icons-material/Add";
import { useFormik } from "formik";
import TestModule from "../../services/modules/TestModule";
import { Box } from "@mui/system";
import Answer from "./Answer";
import Answers from "./Answers";

const AddNewQuestionButton = ({ testState, setQuestions, questions }) => {
  const [Index, setIndex] = useState("");
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
  });

  const [openQuestionModal, setopenQuestionModal] = useState(false);
  const [answers, setAnswers] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      answers.map((answer) => (answer.isCorrect = false));
      console.log(values);
      answers[Index].isCorrect = true;
      values["answers"] = answers;
      let response = await TestModule.CreateQuestion(testState.id, values);
      setQuestions([...questions, response.data]);
      setAnswers([]);
      setopenQuestionModal(false);
      formik.values.description = "";
      formik.values.name = "";
    },
  });
  return (
    <div>
      <Tooltip title="Add new question">
        <Button color="success" onClick={() => setopenQuestionModal(true)}>
          <AddIcon></AddIcon>
        </Button>
      </Tooltip>
      <Dialog
        open={openQuestionModal}
        onClose={() => setopenQuestionModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle>Add new question</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Question name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              multiline
              id="description"
              name="description"
              label="Question description"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              sx={{ mb: 1, mt: 1 }}
            />
            <Box>
              <Answers
                setIndex={setIndex}
                answers={answers}
                setAnswers={setAnswers}
              ></Answers>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button
                onClick={() => {
                  setopenQuestionModal(false);
                  setAnswers([]);
                  formik.values.description = "";
                  formik.values.name = "";
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewQuestionButton;
