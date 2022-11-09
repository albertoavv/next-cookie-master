import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Cookies from 'js-cookie';
import axios from 'axios';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onClick = async() => {
    const { data } = await axios.get('/api/hello');

    console.log({ data });
}
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Aceptas nuestras Cookies?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           
           <p>Usamos cookies para mejorar tu experiencia en la web.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={onClick} autoFocus>
            Si
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}