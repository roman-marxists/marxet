import { Card, CardActions, CardActionArea } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, product }) => {
  return (
    <Card raised>
        {children}
        <Link href={`/products/${product?._id}`}>
        <CardActionArea>
          <CardImage photos={product?.photos}/>
          <CardDescription description={product?.description}/>
        </CardActionArea>
      </Link>
      {/* <Link href={`/products/${id}`}>link</Link>
        {product?.createdBy?.email} */}
        <CardActions>
          <UsernameButton createdBy={product?.createdBy} />
        </CardActions>
      </Card>
  );
};

export default ItemCard;
