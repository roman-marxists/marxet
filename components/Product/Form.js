import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Avatar,
} from "@mui/material";
import { doCreateProduct } from "@api/product";
import { useAuth } from "@context/auth";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useProducts } from "@context/product";

const categories = [
  "Cars",
  "Real estate",
  "Jobs and services",
  "Electronics",
  "Home and garden",
  "Clothing and accessories",
  "Baby items",
  "Movies, books and music",
  "Sports and leisure",
  "Other vehicles and parts",
  "Free stuff",
  "Other",
];

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
  const { products, setProducts } = useProducts();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [photo, setPhoto] = useState(null);
  const image = watch("photo");

  const onSubmit = async (data) => {
    const createdProduct = await doCreateProduct({
      ...data,
      createdBy: user._id,
    });
    setProducts([...products, createdProduct]);
    handleClose();
  };

  useEffect(() => {
    if (image?.length == 1) {
      setPhoto(URL.createObjectURL(image[0]));
    }
  }, [image]);

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
        <FormControl fullWidth margin="normal">
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            fullWidth
            label="category"
            {...register("category", { required: true })}
          >
            {categories.map((c, i) => (
              <MenuItem key={i} value={c}>
                {c}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box my={1}></Box>
        {photo ? (
          <Avatar
            src={photo}
            sx={{ width: 56, height: 56 }}
            variant="rounded"
          />
        ) : (
          <TextField
            margin="normal"
            name="photo"
            type="file"
            {...register("photo")}
          />
        )}
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
