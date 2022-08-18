import {
  Button,
  List,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import Answer from "./Answer";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Answers = ({ answers, setAnswers, setIndex }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  function addAnswers(answerText) {
    if (answerText != null && answerText != "") {
      let newAnswer = {
        text: answerText,
        isCorrect: false,
      };
      setAnswers([...answers, newAnswer]);
      setValue("");
    }
  }
  return (
    <div>
      <Box>
        <Typography variant="h4" gutterBottom sx={{ m: 0 }}>
          Answers:
        </Typography>
      </Box>
      <List>
        <RadioGroup defaultValue={0}>
          {answers.map((answer, index) => (
            <Answer
              setIndex={setIndex}
              answer={answer}
              index={index}
            ></Answer>
          ))}
        </RadioGroup>
      </List>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          multiline
          fullWidth
          label="text"
          value={value}
          onChange={handleChange}
          sx={{ mb: 1, mt: 1 }}
        />
        <Tooltip title="Add new answer">
          <Button onClick={() => addAnswers(value)}>
            <AddBoxIcon />
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
};

export default Answers;
