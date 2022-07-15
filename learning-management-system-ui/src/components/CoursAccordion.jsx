import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddButton from "./coursespage/AddButton";
import EditButton from "./coursespage/EditButton";
import CorseBody from "./coursespage/CorseBody";



const CoursAccordion = ({ cours }) => {

  let color = '';
  let name = cours.name;
  if(!cours.isActive){name = cours.name + '(is not Active)'; color = 'error'}

  return (
    <Accordion sx={{ m: 1 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id={cours.id}
      >
        <Typography flexGrow={1} color={color}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CorseBody cours={cours} />
      </AccordionDetails>
    </Accordion>
  );
};

export default CoursAccordion;
