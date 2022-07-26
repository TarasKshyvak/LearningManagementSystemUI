import React from 'react';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";

const ChatMessage = ({message, currentUser}) => {
    return (
        <Box>
            <Box
                sx={{
                    borderRadius: '7px',
                    padding: '6px 8px',
                    borderBottomRightRadius: `${message.sender === currentUser.userName ? '0px' : '10px'}`,
                    borderBottomLeftRadius: `${message.sender === currentUser.userName ? '10px' : '0px'}`,
                    margin: '4px 0',
                    backgroundColor: `${message.sender === currentUser.userName ? 'rgba(25,118,209,0.43)' : 'rgba(25,118,209,0.22)'}`
                }}>
                <Typography align='left'
                            sx={{
                                fontSize: '14px'
                            }}
                >
                    {message.text}
                </Typography>
            </Box>
            <Box sx={{fontSize: '10px', textAlign: 'left'}}>
                {new Date(message.date).toLocaleDateString()}
            </Box>
        </Box>
    );
};

export default ChatMessage;