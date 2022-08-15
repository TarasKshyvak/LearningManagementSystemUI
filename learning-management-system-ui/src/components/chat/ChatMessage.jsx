import React from 'react';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";


const ChatMessage = ({message, currentUser}) => {

    return (
        <Box>
            <Box
                sx={{
                    borderRadius: '7px',
                    padding: '3px 9px',
                    borderBottomRightRadius: `${message.sender === currentUser.userName 
                                                ? '0px' : '10px'}`,
                    borderBottomLeftRadius: `${message.sender === currentUser.userName
                                                ? '10px' : '0px'}`,
                    backgroundColor: `${message.sender === currentUser.userName
                                        ? 'rgba(25,118,209,0.43)' : 'rgba(25,118,209,0.22)'}`,
                    textAlign: 'left',
                }}>
                {message.sender !== currentUser.userName ?
                    <Typography 
                                sx={{
                                    fontSize: '13px',
                                    fontWeight: '900',
                                    marginBottom: '0px',
                                    color: 'rgba(25,118,209,0.85)'
                                }}
                    >
                        {message.sender}
                    </Typography> : <></>
                }

                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#483737',
                        maxWidth: '250px',
                        display: 'inline-block',
                        wordBreak: 'break-all'
                    }}
                >
                    {message.text}
                </Typography>

            </Box>
            <Box sx={{
                fontSize: '9.2px',
                textAlign: `${message.sender === currentUser.userName ? 'right' : 'left'}`,
                color: 'rgba(166,164,164,0.7)',
                marginBottom: '4px'
            }}>
                {new Date(message.date).toLocaleString().slice(0, -3)}
            </Box>
        </Box>
    );
};

export default ChatMessage;