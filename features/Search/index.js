import {
  Box,
  Paper,
  Card,
  Grid,
  FormRow,
  CardContent,
  CardHeader,
  Button,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ItemCard from "../../components/ItemCard";
import { getProducts } from "@api/product";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const getProductData = await getProducts();
    console.log(getProductData);
    setProducts(getProductData);
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
            {products.map((d) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  style={{ background: "inherit" }}
                >
                  <ItemCard id={d} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
