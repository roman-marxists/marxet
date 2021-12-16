import { useState } from 'react';
import { Box } from '@mui/material';
import ItemCard from '../../components/ItemCard/index';
import styled from 'styled-components';
import { useTheme } from '@mui/system';
// import { styled } from '@mui/material/styles';

// const StyledBox = styled(Box)(({theme}) => {
//   padding: 1,
//   backgroundColor: theme.palette.success.main,
//   border-radius: 5px,
//   box-shadow: 0 3px 10px #888888,
// })

const UserInventory = () => {
  const [inventory, setInventory] = useState([]);

  return (
    <StyledBox>
      UserInventory
      {
        inventory.map(listing => {
          <ItemCard />
        })
      }
      <ItemCard />
    </StyledBox>
  );
};

export default UserInventory;

const StyledBox = styled(Box)`
  /* outline: 1px solid blue; */
  padding: 10px;
  background: #F8F8F8;
  border-radius: 5px;
  box-shadow: 0 3px 10px #888888;
`

