import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import * as React from "react";

const EditButton = ({course, setopen}) => {
  return (
    <Box >
        <Fab
          onClick={()=>setopen(true)}
          color="secondary"
          aria-label="edit"
          sx={{ maxHeight: 40, maxWidth: 40, m:1 }}
        >
          <EditIcon />
        </Fab>
    </Box>
  );
};

export default EditButton;
