import { useState } from 'react';
import { Box } from '@mui/material';
import ItemCard from '../../components/ItemCard/index';
import styled from 'styled-components';

const UserInventory = () => {
  const [inventory, setInventory] = useState([]);

  return (
    <StyledBox>
      UserInventory
      <ItemCard />
    </StyledBox>
  );
};

export default UserInventory;

const StyledBox = styled(Box)`
  outline: 1px solid blue;
`