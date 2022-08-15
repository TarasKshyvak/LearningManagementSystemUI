import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StaffChatService from '../../services/StaffChatService';
import UserService from '../../services/UserService';
import { addMessage, setConnected, setMessages, setUser } from '../../store/staffChatSlice';
import StaffChatBody from './StaffChatBody';
import StaffChatLogin from './StaffChatLogin';

const StaffChatWindow = () => {
    const dispatch = useDispatch();
    const isConnected = useSelector(state => state.staffChat.isConnected);
    const userId = useSelector(state => state.staffChat.userId);

    useEffect(() => {
        if (userId) {(async() => {
            const user = (await UserService.getById(userId)).data;
            dispatch(setConnected({isConnected: await StaffChatService.establish(userId)}));
            dispatch(setMessages({messages: await StaffChatService.getChatHistory()}));
            await StaffChatService.subscribe((m) => dispatch(addMessage(m)));
            dispatch(setUser({user: {userName: user.userName, id: userId}}));
        })();
        }
    }, [userId]);

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
            {isConnected
             ?<StaffChatBody/>
             :<StaffChatLogin/>
            }
        </Box>
    );
};

export default StaffChatWindow;