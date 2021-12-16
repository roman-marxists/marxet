import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@context/auth";
import { Button } from "@mui/material";

import OfferModal from "@components/modals/Offer";

import { doGetProductById } from "@api/product";

const Product = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const data = await doGetProductById(productId);
      setProduct(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {product.name}
      {user && <OfferModal />}
    </div>
  );
};

export default Product;
