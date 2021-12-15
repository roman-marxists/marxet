import * as React from 'react';
import {Button, Modal, Box, Typography, TextField} from '@mui/material';
import { useState } from "react";
import styled from "styled-components";

const AddListing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (<>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={{ 
                    width: 600,
                    height: 300, 
                    border: '1px grey',
                    backgroundColor: 'white',
                    m: 'auto',
                    mt: 30
                    }}>
                <TextDiv>
                  <TextField id="listing-name" sx={{ width: 100, m: 1 }} label="Name" variant="outlined" />
                  <TextField id="listing-description" sx={{ width: 500, m: 1 }} label="Description" variant="outlined" multiline />
                  <Button sx={{ m: 1 }}>Add Listing</Button>
                </TextDiv>
                
            </Box>
        </Modal>
    </>
        )
  }
  

const TextDiv = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  float: left;
  flex-direction: column;
`


  export default AddListing;