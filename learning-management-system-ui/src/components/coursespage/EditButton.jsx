import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Alert, Button } from "@mui/material";

const EditButton = ({course}) => {
  return (
    <Box >
        <Fab
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
