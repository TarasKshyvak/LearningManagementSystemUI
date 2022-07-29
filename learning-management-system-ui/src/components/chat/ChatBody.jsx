import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import ChatMessage from "./ChatMessage";
import Divider from "@mui/material/Divider";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useSelector} from "react-redux";
import ChatService from "../../services/ChatService";

const ChatBody = () => {
    const [newMsg, setNewMsg] = useState('');
    const messages = useSelector(state => state.chat.messages);
    const user = useSelector(state => state.chat.user);
    const group = useSelector(state => state.chat.group);

    //ScrollToBottom
    const bottom = useRef(null)
    const scrollToBottom = () => {
        bottom.current.scrollIntoView({behavior: "smooth"})
    }
    useEffect(() => {
        scrollToBottom()
    }, [messages]);
    //ScrollToBottom

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{
                padding: '15px 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1976d1',
                backgroundImage: 'linear-gradient(90deg, #1976d1 0%, #9FACE6 100%)',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 12px 10px 0px',
            }}>
                <Typography align='center' sx={{
                    color: '#fff',
                    fontSize: '20px', fontWeight: 900
                }}>
                    {group ?
                        group.name
                        :
                        <div>Group name</div>
                    }
                </Typography>
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 10px',
                    alignItems: 'flex-end',
                    overflow: "hidden",
                    overflowY: "scroll",
                    '& > *:first-of-type': {
                        marginTop: 'auto !important'
                    }
                }}>
                {messages &&
                    messages.map((message, index) => {
                        const align = message.sender === user.userName ? 'flex-end' : 'flex-start';
                        return (<Box key={index + message.sender} sx={{alignSelf: align}}>
                            <ChatMessage message={message} currentUser={user}>
                            </ChatMessage>
                        </Box>)
                    })
                }
                <div ref={bottom}></div>
            </Box>
            <Divider/>

            <form onSubmit={async (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (newMsg) {
                    const msg = {sender: user.userName, text: newMsg, date: null};
                    await ChatService.sendMessage(msg);
                    setNewMsg('');
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px 10px',
                    backgroundColor: '#ffffff',
                    borderBottomRightRadius: '15px',
                    borderBottomLeftRadius: '15px'
                }}
                >
                    <TextField size='small'
                               id="outlined-basic"
                               fullWidth label="Enter message..."
                               value={newMsg}
                               onChange={(e) => setNewMsg(e.target.value)}
                               sx={{marginRight: '5px'}}
                    />
                    <Button
                        type='submit'
                        sx={{fontSize: '12px', padding: '0 14px'}} variant="contained" endIcon={<SendIcon/>}>
                        Send
                    </Button>
                </Box>
            </form>

        </Box>
    );
};

export default ChatBody;