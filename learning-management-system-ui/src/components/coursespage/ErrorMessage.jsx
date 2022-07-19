import { Alert, Collapse } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";

const ErrorMessage = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  return (
      <Collapse in={open}>
        <Box width="100%" zIndex="999" sx={{ m: 1 }}>
          <Alert
            severity="error"
            onClose={() => {
              setOpen(false);
            }}
          >
            {children}
          </Alert>
        </Box>
      </Collapse>
  );
};

export default ErrorMessage;
