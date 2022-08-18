import { Box, ListItem } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Question = ({ question, index }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {index}. {question.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ mb: 1 }}>Description: {question.description}</Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box>
            Answers:
            {question.answers.map((answer, index) => {
              let color = "";
              if (answer.isCorrect === true) {
                color = "green";
              }
              return (
                <Box>
                  <Typography color={color}>
                    {index + 1}. {answer.text}{" "}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question;
