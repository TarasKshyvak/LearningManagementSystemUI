import React from "react";
import Fab from "@mui/material/Fab";
import CheckIcon from '@mui/icons-material/Check';
import Modall from "./Modall";

const UpdateButton = ({cours, setDelteModall}) => {
  return (
    <Fab
      color="success"
      aria-label="add"
      onClick={()=>setDelteModall(true)}
      sx={{ maxHeight: 40, maxWidth: 40, m: 1, zIndex: 1 }}
    >
      <CheckIcon /> 
    </Fab>
  );
};

export default UpdateButton;
