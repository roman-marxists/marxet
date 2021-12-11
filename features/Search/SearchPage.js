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
import List from "../../components/VirtualizedList";

const SearchPage = () => {
  const dummy = [0, 1, 2, 3, 4, 5, 6, 7, 8];
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
        <Box className="List" sx={{ width: "20%", paddingRight: "5vw" }}>
          <List />
        </Box>

        <Box className="Grid" sx={{ alignItems: "flex-start" }}>
          <TrendingUpIcon fontSize="large" color="primary" />
          <Grid container spacing={4}>
            {dummy.map((d) => {
              return (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  style={{ background: "inherit" }}
                >
                  <ItemCard />
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
