import { useState } from 'react';
import { Box, Grid } from '@mui/material';
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
  const [inventory, setInventory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <Box>
      <StyledBox>
        <Header />
        <Grid container direction="row" spacing={2}>
          {
            inventory.map((listing, i) => {
              return (
                <Grid item>
                  <ItemCard key={i}/>
                </Grid>
              )
            })
          }
        </Grid>
      </StyledBox>
    </Box>
  );
};

export default UserInventory;

const Header = () => {
  return (
    <div>UserInventory</div>
  )
}

// const StyledHeader = styled(Header)`
//   position: sticky;
// `

const StyledBox = styled(Box)`
  /* outline: 1px solid blue; */
  padding: 10px;
  background: #F8F8F8;
  border-radius: 5px;
  max-height: 60%;
  overflow-y: auto;
  box-shadow: 0 3px 10px #888888;
`

