import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  border: "3px solid #1976d2",
  boxShadow: 24,
  p: 4,
};
const Modall = ({ handleClose, open, children }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default Modall;
