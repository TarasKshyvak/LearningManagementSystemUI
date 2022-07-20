import React from 'react';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";

const ChatMessage = ({message}) => {
    return (
        <Box
            sx={{
                borderRadius: '10px',
                padding: '8px 10px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                // borderBottomRightRadius: '0',
                margin: '4px 0'
            }}>
            <Typography align='left'
                        sx={{
                            fontSize: '14px'
                        }}
            >
                {message.text}
            </Typography>
        </Box>
    );
};

export default ChatMessage;