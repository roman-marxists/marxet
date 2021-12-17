import FavoriteHeader from '@components/ItemCard/FavoriteHeader';
import WatchCountHeader from '@components/ItemCard/WatchCountHeader';
import { CardHeader } from '@mui/material';

const HeaderWithIcons = ({ showFavoriteIcon, showWatchesIcon, clickable, productId }) => {
  return (
    <CardHeader
      sx={{ zIndex: 9999 }}
      action={
        <>
          {showWatchesIcon && (
            <WatchCountHeader productId={productId} clickable={true} /> //TODO: populate watchesCount
          )}
          {showFavoriteIcon && <FavoriteHeader productId={productId}/>}
        </>
      }
    />
  );
};

export default HeaderWithIcons;
