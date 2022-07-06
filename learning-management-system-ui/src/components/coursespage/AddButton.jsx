import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

const AddButton = (props) => {
  
  return (
      <Fab {...props} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      
  );
};

export default AddButton;
