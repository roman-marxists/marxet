import { Box, Grid } from "@mui/material";
import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";
import { doGetProducts } from "@api/product";
import { useSearchContext } from "@context/productSearch";
import FavoriteHeader from "@components/ItemCard/FavoriteHeader";
import HeaderWithIcons from "@components/ItemCard/HeaderWithIcons";
import { useProducts } from "@context/product";
import { ProductProvider } from "@context/product";

const ProductList = () => {
  const { products, setProducts, searchedProducts } = useProducts();
  console.log("🚀 ~ file: ProductList.js ~ line 13 ~ ProductList ~ products", products)

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const data = await doGetProducts();
  //       setProducts(data ? data : []);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <ProductProvider>
      <Box
        className="Search"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "90%",
          margin: "auto",
          marginRight: "20%",
        }}
      >
        <Box
          className="Grid"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "100vw",
            padding: "50px",
            marginLeft: "10vw",
          }}
        >
          <Grid container spacing={8}>
            {products.map((product, idx) => {
              return (
                <Grid
                  key={idx}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  style={{ background: "inherit" }}
                >
                  <ItemCard product={product}>
                    <HeaderWithIcons
                      product={product}
                      showFavoriteIcon
                      showWatchesIcon
                      clickable={true}
                    />
                  </ItemCard>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </ProductProvider>
  );
};

export default ProductList;
