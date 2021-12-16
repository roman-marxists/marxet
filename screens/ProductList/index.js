import { Box, Grid } from "@mui/material";
import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";
import { doGetProducts } from "@api/product";
import { useSearchContext } from "@context/productSearch";

<<<<<<< HEAD:features/Search/SearchPage.js
// wtf is happening here
const SearchPage = () => {
  const dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8];
=======
const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { searchedProducts, setSearchedProducts } = useSearchContext();

  const fetchProducts = async () => {
    try {
      const data = await doGetProducts();
      setProducts(data ? data : []);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
>>>>>>> 42d50367f04f735a5883338d6d3b86572d4dec6f:screens/ProductList/index.js

  return (
    <>
      <Box
        className="Search"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "90%",
          margin: "auto",
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
            {products.map((p, i) => {
              return (
                <Grid
                  key={i}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  style={{ background: "inherit" }}
                >
                  <ItemCard product={p} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
