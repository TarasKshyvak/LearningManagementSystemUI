import {
  Box,
  FormControlLabel,
  ListItem,
  Radio,
  Typography,
} from "@mui/material";
import React from "react";

const Answer = ({ answer, index, setIndex }) => {
  function ChangeState(index) {
     setIndex(index);
  }
  return (
    <ListItem>
      <FormControlLabel
        onChange={() => ChangeState(index)}
        value={index}
        control={<Radio />}
        // disabled={true}
      />
      <Box>{answer.text}</Box>
    </ListItem>
  );
};

export default Answer;
