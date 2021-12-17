import React, { useState, useEffect } from 'react';
import { CardHeader } from '@mui/material';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography } from '@mui/material';
import { doUpdateUserWatchList } from '@api/user';
import { doUpdateProductWatchCount } from '@api/product';
import { useAuth } from '@context/auth';

/**
 * Product ID for checking the watch count
 * User Info get from Provider checking if it was watched
 *
 * @param {*} param0
 * @returns
 */
const WatchCountHeader = ({product, clickable}) => {
  const [watchCount, setWatchCount] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // TODO: populate using product info
    setWatchCount(product.watchCount)

    // TODO: isWatched is not starting of as true EVER. even when its uspposed to
    setIsWatched(user.watchList.includes(product))
  }, [product.watchCount, user.watchList])

  const handleWatchCount = () => {
    if (clickable && !isWatched) {
      setWatchCount(prev => prev + 1);
      setIsWatched(prev => !prev);
      // PUT user
      doUpdateUserWatchList({
        user,
        watchList: [...user.watchList.slice(), product]
      });

      // PUT Product
      doUpdateProductWatchCount({
        product,
        watchCount: product.watchCount + 1
      })

    } else if (clickable && isWatched) {
      setWatchCount(prev => prev - 1);
      setIsWatched(prev => !prev);
      // PUT remove from user watch list
      doUpdateUserWatchList({
        user,
        watchList: user.watchList.filter(current => current !== product)
      });

      // PUT Product
      doUpdateProductWatchCount({
        product,
        watchCount: product.watchCount - 1
      })
    }
  }

  return (
        <IconButton aria-label="add-to-favorites" onClick={handleWatchCount}>
          <Typography>{watchCount}</Typography>
          {!isWatched ? <VisibilityIcon /> : <VisibilityIcon sx={{ color: 'red' }} />}
        </IconButton>
  );
};

export default WatchCountHeader;
