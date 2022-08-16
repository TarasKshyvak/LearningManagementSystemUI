import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserId } from '../../store/staffChatSlice';

const StaffChatLogin = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    fontWeight: '900',
                    fontSize: '20px',
                }}
            >
                Enter your user id:
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '10px'
                }}
            >
                <TextField
                    size='small'
                    id="outlined-basic"
                    fullWidth
                    placeholder="User Id"
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
        </Box>
    );
};

export default StaffChatLogin;