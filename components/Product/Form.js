import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";
import { doCreateProduct } from "@api/product";
import { useAuth } from "@context/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProductForm({ handleClose }) {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await doCreateProduct({ ...data, createdBy: user.uid });
    handleClose();
  };

  return (
    <Box sx={style}>
      <Typography component="h1" variant="h5" textAlign="center">
        Add Listing
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          error={errors.title}
          margin="normal"
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoComplete="title"
          autoFocus
          {...register("name", { required: true })}
        />
        <TextField
          error={errors.description}
          margin="normal"
          fullWidth
          name="description"
          label="Description"
          type="description"
          id="description"
          autoComplete="current-description"
          {...register("description", { required: true })}
        />
        <TextField
          error={errors.zipCode}
          id="outlined-number"
          margin="normal"
          label="Zip Code"
          type="number"
          {...register("zipCode", { required: true })}
        />
        <TextField
          error={errors.zipCode}
          id="outlined-number"
          margin="normal"
          label="Category"
          fullWidth
          type="text"
          {...register("category", { required: true })}
        />
        <Box my={1}></Box>
        <TextField
          margin="normal"
          name="photo"
          type="file"
          {...register("photo")}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Create Listing
        </Button>
      </Box>
    </Box>
  );
}
