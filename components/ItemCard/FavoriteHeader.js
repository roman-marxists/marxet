import { useState } from 'react';
import { CardHeader } from '@mui/material';
import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteHeader = ({product}) => {
  const [isFavorited, setFavorited] = useState(false);

  const handleFavoritedItem = () => {
    setFavorited(() => !isFavorited);
  };

  return (
    <IconButton aria-label="add-to-favorites" onClick={handleFavoritedItem}>
      {!isFavorited ? <FavoriteBorderIcon /> : <FavoriteIcon sx={{ color: 'red' }} />}
    </IconButton>
  );
};

export default FavoriteHeader;
