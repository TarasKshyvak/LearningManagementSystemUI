import React from "react";
import Fab from "@mui/material/Fab";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Modall from "./Modall";

const DeleteButton = ({cours, setDelteModall}) => {
  return (
    <Fab
      color="error"
      aria-label="add"
      onClick={()=>setDelteModall(true)}
      sx={{ maxHeight: 40, maxWidth: 40, m: 1, zIndex: 1 }}
    >
      <HighlightOffIcon />
    </Fab>
  );
};

export default DeleteButton;
