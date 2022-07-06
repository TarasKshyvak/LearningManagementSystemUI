import * as React from "react";
import Box from "@mui/material/Box";
import EditButton from "./EditButton";
import { Grid, Typography } from "@mui/material";
import DeleteButton from "./DeleteButton";

const CorseBody = ({ cours }) => {
  return (
    <Box >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography align="left">
          Description: {cours.description}
        </Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Box sx={{ mt: 5 }}>Start Date: {new Date( cours.startedAt).toLocaleDateString()}</Box>

          <Grid container direction="row" justifyContent="flex-end">
            <EditButton course={cours} />
            <DeleteButton />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CorseBody;
