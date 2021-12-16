import { useState } from 'react';
import { Box } from '@mui/material';
import ItemCard from '../../components/ItemCard/index';

const UserInventory = () => {
  const [inventory, setInventory] = useState([]);

  return (
    <Box>
      UserInventory
      <ItemCard />
    </Box>
  );
};

export default UserInventory;
