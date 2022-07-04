import { Box, TextField } from "@mui/material";
import React from "react";

const AddUserModel = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ width: "50%" }}>
        <TextField
          id="standard-basic"
          label="Courses Name"
          variant="standard"
        />
      </Box>
      <Box>
        <TextField
          id="outlined-multiline-flexible"
          label="Courses Description"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          sx={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default AddUserModel;
