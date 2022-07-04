import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import {Fab} from "@mui/material";
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

    return (
        <div >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Fab onClick={handleClose} sx = {{position: 'absolute', top: '20px', right: '20px', backgroundColor: 'red'}}
                             color="error" size={'small'} aria-label="error">
                        <CloseIcon />
                        </Fab>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
