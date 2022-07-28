import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Alert, Collapse, Grid } from "@mui/material";

const InfoMessage = ({ message }) => {
  const [open, setOpen] = React.useState(true);
  let severity;
  severity = message.type;
  return (
      <Collapse in={open}>
        <Box width="100%" zIndex="999" sx={{ m: 1 }}>
          <Alert
          open = {open}
            severity={severity}
            onClose={() => {
              setOpen(false);
            }}
          >
            {message.text}
          </Alert>
        </Box>
      </Collapse>
  );
};

export default InfoMessage;
