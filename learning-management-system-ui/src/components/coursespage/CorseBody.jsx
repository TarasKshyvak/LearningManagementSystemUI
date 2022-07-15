import * as React from "react";
import Box from "@mui/material/Box";
import EditButton from "./EditButton";
import { Grid, Modal, Typography } from "@mui/material";
import DeleteButton from "./DeleteButton";
import Modall from "./Modall";
import EditCoursesModel from "./EditCourseModel";
import DelleteModal from "./DeleteModal";

const CorseBody = ({ cours }) => {
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [DelteModall, setDelteModall] = React.useState(false);

  const editButton = <EditButton setopen={setOpen} course={cours} />;
  const emptySpace = <div></div>

  let button;
  if (cours.isActive) {
    button = editButton;
  }else 
  {
    button = emptySpace;
  }

 

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography align="left">Description: {cours.description}</Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Box sx={{ mt: 5 }}>
            Start Date: {new Date(cours.startedAt).toLocaleDateString()}
          </Box>

          <Grid container direction="row" justifyContent="flex-end">
            {button}
            <DeleteButton cours={cours} setDelteModall={setDelteModall} />
          </Grid>
        </Grid>
      </Grid>
      <Modall open={open} errors={errors}>
        <EditCoursesModel
          setOpen={setOpen}
          setErrors={setErrors}
          cours={cours}
        ></EditCoursesModel>
      </Modall>

      <Modall open={DelteModall}>
        <DelteModall></DelteModall>
      </Modall>
    </Box>
  );
};

export default CorseBody;
