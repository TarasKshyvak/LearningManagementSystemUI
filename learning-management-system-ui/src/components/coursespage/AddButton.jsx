import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const AddButton = (props) => {
  
  return (
      <Fab {...props} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      
  );
};

export default AddButton;
