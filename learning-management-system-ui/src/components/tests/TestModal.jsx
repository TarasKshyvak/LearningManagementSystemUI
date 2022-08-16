import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

const TestModal = ({StartTestModal, setStartTestModal, currentSubject}) => {
    return (
      <Dialog
        open={StartTestModal}
        onClose={()=>setStartTestModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"You want to start test?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             If you start test you will not be able to cancel or stop it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setStartTestModal(false)}>Cancel</Button>
          <Button onClick={()=>setStartTestModal(false)} autoFocus>
          Start test
          </Button>
        </DialogActions>
      </Dialog>
    );
};

export default TestModal;