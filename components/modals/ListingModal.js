import * as React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import { useState } from "react";
import ProductForm from "@components/Product/Form";

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
      <Button
        onClick={handleOpen}
        color="inherit"
        variant="outlined"
        sx={{ width: 250 }}
      >
        Add a Listing
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-form"
        aria-describedby="product-form-description"
      >
        <ProductForm handleClose={handleClose} />
      </Modal>
    </>
  );
};

export default AddListing;
