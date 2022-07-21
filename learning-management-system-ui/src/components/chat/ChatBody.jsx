import React, {useEffect, useRef, useState} from 'react';
import {Box} from "@mui/system";
import Typography from "@mui/material/Typography";
import ChatMessage from "./ChatMessage";
import Divider from "@mui/material/Divider";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../store/chatSlice";
import ChatService from "../../services/ChatService";


const ChatBody = () => {
    const [newMsg, setNewMsg] = useState('');
    const messages = useSelector(state => state.chat.messages);
    const dispatch = useDispatch();

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
                backgroundColor: '#74EBD5',
                backgroundImage: 'linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px'
            }}>
                <Typography align='center' sx={{
                    color: '#fff',
                    fontSize: '20px', fontWeight: 900
                }}>
                    Group name
                </Typography>
            </Box>

            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 10px',
                    alignItems: 'flex-end',
                    // justifyContent: 'flex-end',
                    overflow: "hidden",
                    overflowY: "scroll",
                    '& > *:first-of-type': {
                        marginTop: 'auto !important'
                    }
                }}>
                {messages &&
                    messages.map((message, index) => {
                        const align = message.sender==='Me' ? 'flex-end' : 'flex-start';
                        return (<Box key={index + message.sender} sx={{alignSelf: align}}>
                            <ChatMessage message={message}>
                            </ChatMessage>
                        </Box>)
                    })
                }
                <div ref={bottom}></div>
            </Box>
            <Divider/>
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
                    onClick={async() => {
                        if (newMsg) {
                            const msg = {sender: 'Me',text: newMsg, date: null};
                            await ChatService.sendMessage(msg, (m)=>dispatch(addMessage({message: m})));
                            setNewMsg('');
                        }
                    }}
                    sx={{fontSize: '12px', padding: '0 14px'}} variant="contained" endIcon={<SendIcon/>}>
                    Send
                </Button>
            </Box>
        </Box>
    );
};

export default ChatBody;