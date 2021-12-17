import FavoriteHeader from '@components/ItemCard/FavoriteHeader';
import WatchCountHeader from '@components/ItemCard/WatchCountHeader';
import { CardHeader } from '@mui/material';
import { useAuth } from '@context/auth';

const HeaderWithIcons = ({ showFavoriteIcon, showWatchesIcon, clickable, product }) => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <CardHeader
          sx={{ zIndex: 9999 }}
          action={
            <>
              {showWatchesIcon && (
                <WatchCountHeader product={product} clickable={clickable} /> //TODO: populate watchesCount
              )}
              {showFavoriteIcon && <FavoriteHeader product={product} />}
            </>
          }
        />
      )}
    </>
  );
};

export default HeaderWithIcons;
