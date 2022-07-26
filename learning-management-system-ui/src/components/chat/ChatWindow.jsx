import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/system";
import ChatBody from "./ChatBody";
import ChatLogIn from "./ChatLogIn";
import {useDispatch, useSelector} from "react-redux";

const ChatWindow = () => {

    const isConnected = useSelector(state => state.chat.isConnected);
    return (
        <Box
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.2) 2px 5px 10px 5px',
                minWidth: '400px',
                maxHeight: '600px',
                height: '600px',
                backgroundColor: '#ffffff',
                borderRadius: '15px'
            }}
        >
            {isConnected ?
                <ChatBody>
                </ChatBody>
                :
                <ChatLogIn>
                </ChatLogIn>
            }
        </Box>
    );
};

export default ChatWindow;