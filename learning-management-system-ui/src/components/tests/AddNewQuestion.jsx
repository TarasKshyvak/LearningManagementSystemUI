import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Tooltip,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Question from "./Question";
import AddNewQuestionButton from "./AddNewQuestionButton";

const AddNewQuestion = ({
  setAddNewQuestionState,
  AddNewQuestionState,
  testState,
}) => {
  const [questions, setQuestions] = React.useState([]);
  return (
    <Dialog
      open={AddNewQuestionState}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="true"
      scroll="body"
    >
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          Add questions for "{testState.name}" Test
          <Tooltip title="Close">
            <Button onClick={() => setAddNewQuestionState(false)}>
              <HighlightOffIcon color="error"></HighlightOffIcon>
            </Button>
          </Tooltip>
        </Box>
      </DialogTitle>
      <DialogContent>
        {questions.map((question) => {
          <Question question={question}></Question>
        })}
        <AddNewQuestionButton></AddNewQuestionButton>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewQuestion;
