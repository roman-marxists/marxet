import { Card, CardHeader, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = () => {
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(() => !isFavorited);
  };

  return (
    <Card raised sx={{ width: "15vw", height: "15vw" }}>
      <CardHeader
        action={
          <IconButton
            aria-label="add to favorites"
            onClick={handleFavoritedItem}
          >
            {!isFavorited ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteIcon sx={{ color: "red" }} />
            )}
          </IconButton>
        }
      />
      <CardImage />
      <CardDescription />
      <UsernameButton />
    </Card>
  );
};

export default ItemCard;
