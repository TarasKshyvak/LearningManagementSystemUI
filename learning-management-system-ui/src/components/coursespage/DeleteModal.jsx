import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CoursesModule from "../../services/modules/CoursesModule";

export default function DelleteModal({ setOpen, cours }) {

  return (
    <Box>
      <h3>You want Change Course Status(isActive/is not Active)?</h3>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Button
          color="primary"
          variant="contained"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={() => {
            CoursesModule.deleteCoursbyID(cours.id);
            setOpen(false);
          }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
}
