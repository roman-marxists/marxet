import * as React from 'react';
import {Button, Modal, Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { useState, useEffect } from "react";
import styled from "styled-components";
import { doGetCategories } from '@api/category';

const AddListing = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState(["Yeezy", "KSubi", "Mike", "Kelly", "Kyle"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [zip, setZip] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(async () => {
  //   const data = await doGetCategories();
  //   console.log("categories here", data);
  //   setCategories(data);
  // }, [])

  const [dropped, dropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    dropdownOpen(true);
  };

  const handleDropdownClose = () => {
    dropdownOpen(false);
  };


  // const handleListing = () => {

  // }

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
                setName(e.target.value); 
                console.log(name);}} 
            />
            <TextField 
              id="listing-description" 
              sx={{ width: 500, m: 1 }} 
              inputProps={{ maxLength: 300 }} 
              label="Description" 
              variant="outlined" 
              multiline 
              onChange={(e) => {
                setDescription(e.target.value); 
                console.log(description);}} 
            />

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-controlled-open-select-label">
                Categories
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={dropped}
                onClose={handleDropdownClose}
                onOpen={handleDropdownOpen}
                value={selectedCategory}
                label="category"
                onChange={(e) => {
                  setSelectedCategory(e.target.value); 
                  console.log(selectedCategory);}}
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
                setZip(e.target.value); 
                console.log(zip);}} 
            />
            <Button sx={{ m: 1 }} onClick={() => {let listingData = {
                name: name,
                description: description,
                categories: [selectedCategory],
                zipcode: Number(zip),
                createdBy: { type: Schema.Types.ObjectId, ref: "User" },
              }; 
              handleClose();}} >Add Listing</Button>
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