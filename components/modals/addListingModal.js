import * as React from 'react';
import {Button, Modal, Box, Typography, TextField, FormGroup, FormControlLabel, Checkbox} from '@mui/material';
import { useState, useEffect } from "react";
import styled from "styled-components";
import Dropdown from "../Dropdown/index.js";

const AddListing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    
  }, [])

  // const [open, dropdownOpen] = useState(false);

  // const categories = ["Yeezy", "KSubi", "Mike", "Kelly", "Kyle"];

  // const handleOpen = () => {
  //   dropdownOpen(true);
  // };

  // const handleClose = () => {
  //   dropdownOpen(false);
  // };


  const handleListing = () => {

  }

  let listing = {
    name: "",
    description: "",
    category: "",
    zipcode: ""
  }

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={{ 
          width: 600,
          height: 500, 
          border: '1px grey',
          backgroundColor: 'white',
          m: 'auto',
          mt: 30
        }}>
          
          <TextDiv>
            <TextField 
              id="listing-name" 
              sx={{ width: 500, m: 1 }} 
              inputProps={{ maxLength: 50 }} 
              label="Item/Service" 
              variant="outlined" 
              onChange={(e) => {
                listing.name = e.target.value; 
                console.log(listing.name);}} 
            />
            <TextField 
              id="listing-description" 
              sx={{ width: 500, m: 1 }} 
              inputProps={{ maxLength: 300 }} 
              label="Description" 
              variant="outlined" 
              multiline 
              onChange={(e) => {
                listing.description = e.target.value; 
                console.log(listing.description);}} 
            />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Categories
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={selectedCategory}
                label="category"
                onChange={handleChange}
                variant="outlined"
              >
                {categories.map((c) => {
                  return <MenuItem value={c}>{c}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <TextField 
              id="zip" 
              sx={{ width: 200, m: 1 }} 
              inputProps={{ maxLength: 5 }} 
              label="Zipcode" 
              variant="outlined" 
              onChange={(e) => {
                listing.zipcode = e.target.value; 
                console.log(listing.zipcode);}} 
            />
            <Button sx={{ m: 1 }} onClick={() => {console.log(listing); handleClose();}} >Add Listing</Button>
          </TextDiv>
          <Button onClick={handleClose} s={{float: "right"}} >X</Button>
        </Box>
      </Modal>
    </>
        )
  }
  

const TextDiv = styled.div`
  display: flex;
  width: 500px;
  height: 100%;
  float: left;
  flex-direction: column;
`

const SimpleDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
`

export default AddListing;


// Make a x-out button instead of click-outside close