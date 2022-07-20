import { Button } from "@mui/material";
import React from "react";


const DeleteCourseModel = () => {
    return (
        <div>
            <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </div>
    );
};

export default DeleteCourseModel;
