import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StaffChatService from '../../services/StaffChatService';
import ChatMessage from '../chat/ChatMessage';

const StaffChatBody = () => {
    const messages = useSelector(state => state.staffChat.messages);
    const user = useSelector(state => state.staffChat.user);

    const [newMessage, setNewMessage] = useState('');

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    padding: '15px 0',
                    backgroundImage: 'linear-gradient(90deg, #1976d1 0%, #9FACE6 100%)',
                    borderTopLeftRadius: '15px',
                    borderTopRightRadius: '15px',
                    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 12px 10px 0px',
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',
                        fontSize: '20px',
                        fontWeight: 900
                    }}
                >
                    Staff Chat
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flexGrow: 1,
                    overflow: "hidden",
                    overflowY: "scroll",
                    padding: '10px 10px',
                    alignItems: 'flex-end'
                }}
            >
                {messages.map((message, index) => {
                 const align = message.sender === user.userName ? 'flex-end' : 'flex-start';
                 return (<Box
                    key={index + message.sender}
                    sx={{
                        alignSelf: align,
                    }}
                 >
                    <ChatMessage 
                        message={message} 
                        currentUser={user}
                    />
                 </Box>)
                })}
            </Box>
            <Divider/>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (newMessage) {
                        const msg = {sender: user.userName, text: newMessage, date: null};
                        await StaffChatService.sendMessage(msg);
                        setNewMessage('');
                    }
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 10px',
                        backgroundColor: '#ffffff',
                        borderBottomRightRadius: '15px',
                        borderBottomLeftRadius: '15px'
                    }}
                >
                    <TextField 
                        size='small'
                        id="outlined-basic"
                        fullWidth placeholder="Message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        sx={{marginRight: '5px'}}
                    />
                    <Button
                        type='submit'
                        sx={{fontSize: '12px', padding: '0 14px'}}
                        variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default StaffChatBody;