import { Card, CardHeader, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ product }) => {
  console.log("🚀 ~ file: index.js ~ line 12 ~ ItemCard ~ product", product);
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(() => !isFavorited);
  };

  return (
    <Card raised sx={{ width: "15vw", cursor: "pointer" }}>
      <CardHeader
        sx={{ zIndex: 9999 }}
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
      <Link href={`/products/${product._id}`}>link</Link>
      {product?.createdBy?.email}
      <UsernameButton />
      {/* {product?.createdBy && (
        <Link href={`/users/${product?.createdBy?._id}`}>
          {product?.createdBy?.email}
        </Link>
      )} */}
    </Card>
  );
};

export default ItemCard;
