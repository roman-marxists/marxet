import { Box, Grid } from "@mui/material";
import ItemCard from "@components/ItemCard";
import { useState, useEffect } from "react";
import { doGetProducts } from "@api/product";
import { useSearchContext } from "@context/productSearch";
import FavoriteHeader from "@components/ItemCard/FavoriteHeader";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { searchedProducts, setSearchedProducts } = useSearchContext();

  const fetchProducts = async () => {
    try {
<<<<<<< HEAD
      const data = await doGetProducts() || [];
      console.log("🚀 ~ file: index.js ~ line 13 ~ fetchProducts ~ data", data);
      setProducts(data);
=======
      const data = await doGetProducts();
      setProducts(data ? data : []);
>>>>>>> development
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
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
<<<<<<< HEAD
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
            {!searchedProducts && products.map((d) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={3}
                      style={{ background: "inherit" }}
                    >
                      <ItemCard id={d._id}>
                        <FavoriteHeader />
                      </ItemCard>
                    </Grid>
                  );
                })}
=======
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
>>>>>>> development
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductPage;
