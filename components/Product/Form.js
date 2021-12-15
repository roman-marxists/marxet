import React from "react";
import { useForm } from "react-hook-form";
import { Box, Typography, TextField, Button } from "@mui/material";

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

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => doUploadBytes(data.image[0]);
  console.log(errors);

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
          helperText={errors.title && errors.title.message}
          {...register("title", { required: true })}
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
          helperText={errors.description && errors.description.message}
          {...register("description", { required: true })}
        />
        <TextField name="photo" type="file" {...register("photo")} />
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
