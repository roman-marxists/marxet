import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { doGetProductById } from "@api/product";

const Product = () => {
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

  return <div>{product.name}</div>;
};

export default Product;
