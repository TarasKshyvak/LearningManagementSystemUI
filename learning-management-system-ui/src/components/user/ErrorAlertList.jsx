import React from 'react';
import Box from "@mui/material/Box";
import ErrorAlert from "./ErrorAlert";

const ErrorAlertList = () => {
    return (
        <Box sx={{ position: 'absolute', bottom: '20px', left: '20px'}}>
            {userErrors.map((err)=>(
                <ErrorAlert key={err}>{err}</ErrorAlert>
            ))}
        </Box>
    );
};

export default ErrorAlertList;