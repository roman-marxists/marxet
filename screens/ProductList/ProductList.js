import { Box, Grid } from "@mui/material";
import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";
import { doGetProducts } from "@api/product";
import { useSearchContext } from "@context/productSearch";
import FavoriteHeader from "@components/ItemCard/FavoriteHeader";
import HeaderWithIcons from "@components/ItemCard/HeaderWithIcons";
import { useProducts } from "@context/product";

const ProductList = () => {
  const {products, setProducts} = useProducts();
  const { searchedProducts, setSearchedProducts } = useSearchContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await doGetProducts();
        setProducts(data);
      } catch (err) {
        setProducts([]);
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
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
            {searchedProducts.length > 0 &&
              searchedProducts.map((d) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      style={{ background: "inherit" }}
                    >
                      <ItemCard id={d._id} />
                    </Grid>
                  );
                })}
            {!searchedProducts.length && products.map((d) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      style={{ background: "inherit" }}
                    >
                      <ItemCard id={d._id}>
                        <HeaderWithIcons showFavoriteIcon={true} showWatchesIcon={true}/>
                      </ItemCard>
                    </Grid>
                  );
                })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductList;
