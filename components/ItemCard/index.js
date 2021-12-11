import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Button,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const ItemCard = () => {
  const [isFavClicked, setFavClicked] = useState(false);

  const handleFavoritedItem = () => {
    setFavClicked(!isFavClicked);
  };

  return (
    <>
      <Card raised sx={{ width: "15vw", height: "10vw" }}>
        {!isFavClicked && (
          <CardHeader
            action={
              // can set onClick to the IconButton
              <IconButton
                aria-label="add to favorites"
                onClick={handleFavoritedItem}
              >
                <FavoriteBorderIcon />
              </IconButton>
            }
          />
          // <CardMedia
          // component="img"
          // height="194"
          // image=""
          // />
        )}
        {isFavClicked && (
          <CardHeader
            action={
              // can set onClick to the IconButton
              <IconButton
                onClick={() => {
                  setFavClicked(!isFavClicked);
                }}
              >
                <FavoriteIcon sx={{ color: "red" }} />
              </IconButton>
            }
          />
          // <CardMedia
          // component="img"
          // height="194"
          // image=""
          // />
        )}
      </Card>
    </>
  );
};

export default ItemCard;
