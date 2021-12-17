import { Card, CardActions, CardActionArea } from "@mui/material";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";

const ItemCard = ({ children, id, product }) => {
  return (
    <Card raised>
      {children}
      <Link href={`/products/${product?._id}`} passHref>
        <CardActionArea>
          <CardImage imageUrl={product?.photos} />
          <CardDescription description={product?.description} />
        </CardActionArea>
      </Link>
      <CardActions>
        <UsernameButton createdBy={product?.createdBy} />
      </CardActions>
    </Card>
  );
};

export default ItemCard;
