import { Card, CardHeader, CardActions, CardActionArea, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import Link from 'next/link';

import CardImage from './CardImage.js';
import CardDescription from './CardDescription.js';
import UsernameButton from './UsernameButton.js';

const ItemCard = ({ children, id, product }) => {
  return (
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
  );
};

export default ItemCard;
