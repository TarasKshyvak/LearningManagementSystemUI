import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Stack } from "@mui/material";
import ErrorMessage from "./ErrorMessage";

const style = {
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

const Modall = ({ handleClose, open, children }) => {
  const [openErrorMessage, setOpenErrorMessage] = React.useState(false);

  let a = [1, 2, 3, 4];
  const container = React.useRef(null);
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box width="100%" height="100%">
        <Box width="20%" maxWidth="500px" minWidth="200px" zIndex="999">
          {a.map((text) => (
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
