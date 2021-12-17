import { Card, CardActions, CardActionArea } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, id, product }) => {
  return (
    <Card raised>
      {children}
      <Link href={`/products/${id}`}>
        <CardActionArea>
          <CardImage />
          <CardDescription />
        </CardActionArea>
      </Link>
      {/* <Link href={`/products/${id}`}>link</Link>
        {product?.createdBy?.email} */}
      <CardActions>
        <UsernameButton />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
