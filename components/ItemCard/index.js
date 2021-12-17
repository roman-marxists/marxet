import { Card, CardHeader, CardActions, CardActionArea } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, id, product }) => {
  console.log("🚀 ~ file: index.js ~ line 10 ~ ItemCard ~ product", product);
  return (
    <Card raised>
      {children}
      <Link href={`/products/${id}`} passHref>
        <CardActionArea>
          <CardImage imageUrl={product?.photos[0]} />
          <CardDescription />
        </CardActionArea>
      </Link>
      <CardActions>
        <UsernameButton />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
