import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const Modall = ({ open, children, errors = [], style = styles }) => {

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width="100%" height="100%">
        <Box width="20%" maxWidth="500px" minWidth="200px" zIndex="999">
          {errors.map((text) => (
            <ErrorMessage>{text}</ErrorMessage>
          ))}
        </Box> 
        <Box sx={style}>
          {children}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          ></Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default Modall;
