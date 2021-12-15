import * as React from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';

const AddListing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            width: 600,
            height: 300,
            border: '1px grey',
            backgroundColor: 'white',
            m: 'auto',
            mt: 30,
          }}
        >
          <input></input>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={console.log('Buying!!!')}>Add Listing</Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddListing;
