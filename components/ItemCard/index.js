import { useState } from "react";
import { Card, CardHeader, CardActionArea, IconButton } from "@mui/material";
import { FavoriteBorderIcon, FavoriteIcon } from "@mui/icons-material";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = () => {
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(!isFavorited);
  };

  return (
    // TODO: STYLE: Create flexbox container
    <Card raised sx={{ width: "30vw", height: "30vw" }}>
      {/* TODO: Wrap Card contents in CardActionArea component */}
      <CardHeader
        action={
          <IconButton
            aria-label="add-to-favorites"
            onClick={handleFavoritedItem}
          >
            { !isFavorited ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ color: "red" }} /> }
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
