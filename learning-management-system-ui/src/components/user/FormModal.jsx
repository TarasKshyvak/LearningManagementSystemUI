import React, {useState, useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import {Fab} from "@mui/material";
import ErrorAlert from "./ErrorAlert";
import {UserErrorContext} from '../Contexts';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
};

export default function FormModal({handleClose, open, children}) {

    const {userErrors} = useContext(UserErrorContext);
    const [isError, setIsError] = useState(false);

    useEffect(() => {

    }, [userErrors]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
            >
                <Box>
                    <Fade in={open}>
                        <Box sx={style}>
                            <Fab onClick={handleClose}
                                 sx={{position: 'absolute', top: '20px', right: '20px', backgroundColor: 'red'}}
                                 color="error" size={'small'} aria-label="error">
                                <CloseIcon/>
                            </Fab>
                            {children}
                        </Box>
                    </Fade>
                    <Box sx={{position: 'absolute', bottom: '20px', left: '20px'}}>
                        {userErrors.map((err) => {
                            return (<ErrorAlert key={err}>{err}</ErrorAlert>)
                        })}
                    </Box>

                </Box>
            </Modal>

        </div>
    );
}
