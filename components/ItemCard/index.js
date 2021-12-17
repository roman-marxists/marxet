import { Stack, Card, CardActions, CardActionArea } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, product }) => {
  return (
    <Card raised
      sx={{
        border: "#c7d6d5 2px solid",
      }}
    >
      <Stack sx={{alignItems: "center", fontSize: "20px", margin: "5px", textAlign: "center"}}>
        {product?.name}
        {children}
      </Stack>
      <Link href={`/products/${product?._id}`}>
        <CardActionArea>
          <CardImage photos={product?.photos}/>
          <CardDescription
            description={product?.description?.length < 50 ? product?.description : product?.description?.substring(0,57) + "..."}
          />
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
