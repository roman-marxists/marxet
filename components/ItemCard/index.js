import { Card, CardHeader, CardActions, CardActionArea, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

// name, description, photos,
const ItemCard = ({ children, id, product }) => {
  return (
    // TODO: STYLE: Create flexbox container
    <Link href={`/products/${id}`}>
      <Card raised sx={{ width: "30vw", height: "30vw", cursor: "pointer" }}>
        {product.name}
        {children}
        <CardActionArea>
          <CardImage url={product.photos[0]} />
          <CardDescription description={product.description} />
        </CardActionArea>
        {/* <Link href={`/products/${id}`}>link</Link>
        {product?.createdBy?.email} */}
        <CardActions>
          <UsernameButton username={product.createdBy} />
        </CardActions>
      </Card>
    </ Link>
  );
};

export default ItemCard;
