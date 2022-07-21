import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/system";
import ChatBody from "./ChatBody";


const ChatWindow = () => {



    return (
        <Box
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 30px',
                maxWidth: '400px',
                maxHeight: '600px',
                height: '600px',
                backgroundColor: '#ffffff',
                borderRadius: '15px'
            }}
        >
            <ChatBody>

            </ChatBody>
        </Box>
    );
};

export default ChatWindow;