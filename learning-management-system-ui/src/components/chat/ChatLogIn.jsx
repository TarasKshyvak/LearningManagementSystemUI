import React, {useEffect, useState} from 'react';
import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useDispatch, useSelector} from "react-redux";
import {setUserId} from "../../store/chatSlice";

const ChatLogIn = () => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    return (<Box
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}
    >
        <Typography sx={{fontWeight: '900', fontSize: '20px', textAlign: 'left'}}>
            Enter your user id:
        </Typography>
        <Box sx={{display: 'flex', marginTop: '10px'}}>
            <TextField size='small'
                       id="outlined-basic"
                       fullWidth label="UserId"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       sx={{marginRight: '5px'}}
            />
            <Button
                color="primary"
                variant="contained"
                sx={{fontSize: '12px', padding: '0 14px'}}
                onClick={() => {
                    dispatch(setUserId({userId: value}))
                }}
                type="submit"
            >
                Connect
            </Button>
        </Box>
    </Box>);
};

export default ChatLogIn;