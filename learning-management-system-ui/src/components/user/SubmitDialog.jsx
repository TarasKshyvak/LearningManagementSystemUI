import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export default function SubmitDialog({open, handleClose, handleSubmit, text}) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {text}
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus variant="outlined" color="error" onClick={handleClose}>
                        No
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" color="success" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
