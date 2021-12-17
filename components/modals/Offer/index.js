import { useEffect, useState } from "react";
import { Button, Modal, Box } from "@mui/material";
import { doGetUserProducts } from "@api/product";
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

const AddListing = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await doGetUserProducts(user.uid);
    setProducts(products ? products : []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        color="secondary"
        variant="outlined"
        sx={{ width: '50%' }}
      >
        Make an offer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="product-form"
        aria-describedby="product-form-description"
      >
        <Box sx={style}>
          <h3>my listing</h3>
          <ul>
            {products.map( (product, i) => (
              <li key={i}>{product.name}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </>
  );
};

export default AddListing;
