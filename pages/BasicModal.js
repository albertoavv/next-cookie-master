import { ChangeEvent, FC, useEffect, useState }  from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Cookies from 'js-cookie';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const onClickServer = async() => {
  const { data } = await axios.get('/api/hello');

  console.log({ data });
}

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p id="modal-modal-title" variant="h6" component="h2">
          {"¿Aceptas nuestras Cookies?"}
          </p>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
          <p>Usamos cookies para mejorar tu experiencia en la web.</p>
          </p>

          <Button onClick={handleClose}>No</Button>
          <Button onClick={onClickServer} autoFocus>
            Si
          </Button>
        </Box>
      </Modal>
    </div>
  );
}