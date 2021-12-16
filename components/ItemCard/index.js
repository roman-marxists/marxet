<<<<<<< HEAD
import { useState } from "react";
import { Card, CardHeader, CardActionArea, IconButton } from "@mui/material";
import { FavoriteBorderIcon, FavoriteIcon } from "@mui/icons-material";
import Link from "next/link";

import CardImage from "./CardImage.js";
import CardDescription from "./CardDescription.js";
import UsernameButton from "./UsernameButton.js";


const ItemCard = ({ product }) => {
  console.log("🚀 ~ file: index.js ~ line 12 ~ ItemCard ~ product", product);
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(!isFavorited);
  };
=======
import { Card, CardHeader, CardActions, CardActionArea, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Link from 'next/link';

import CardImage from './CardImage.js';
import CardDescription from './CardDescription.js';
import UsernameButton from './UsernameButton.js';
>>>>>>> 6eab45c51863526fe9b2844cbef83aadeeb8ff77

const ItemCard = ({ children, id, product }) => {
  return (
<<<<<<< HEAD
    // TODO: STYLE: Create flexbox container
    // TODO: Wrap Card contents in CardActionArea component
    <Card raised sx={{ width: "30vw", height: "30vw", cursor: "pointer" }}>
      <CardHeader
        sx={{zIndex: 9999}}
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
      <Link href={`/products/${product._id}`}>link</Link>
      {product?.createdBy?.email}
      <UsernameButton />
      {/* {product?.createdBy && (
        <Link href={`/users/${product?.createdBy?._id}`}>
          {product?.createdBy?.email}
        </Link>
      )} */}
    </Card>
=======
    <Link href={`/products/${id}`}>
      <Card raised sx={{ width: '15vw', cursor: 'pointer' }}>
        {children}
        <CardActionArea>
          <CardImage />
          <CardDescription />
        </CardActionArea>
        {/* <Link href={`/products/${id}`}>link</Link>
        {product?.createdBy?.email} */}
        <CardActions>
          <UsernameButton />
        </CardActions>
      </Card>
    </Link>
>>>>>>> 6eab45c51863526fe9b2844cbef83aadeeb8ff77
  );
};

export default ItemCard;
