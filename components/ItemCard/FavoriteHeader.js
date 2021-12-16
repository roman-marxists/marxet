import { useState } from 'react';
import { CardHeader, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const FavoriteHeader = () => {
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(() => !isFavorited);
  };

  return (
    <CardHeader
      sx={{ zIndex: 9999 }}
      action={
        <IconButton aria-label="add-to-favorites" onClick={handleFavoritedItem}>
          {!isFavorited ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ color: 'red' }} />}
        </IconButton>
      }
    />
  );
};

export default FavoriteHeader;
