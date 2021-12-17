import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ItemCard from '../../components/ItemCard/index';
import styled from 'styled-components';
import { useTheme } from '@mui/system';
import WatchCountHeader from '@components/ItemCard/WatchCountHeader';
import HeaderWithIcons from '@components/ItemCard/HeaderWithIcons';
import { useAuth } from "@context/auth";

// import { styled } from '@mui/material/styles';

// const StyledBox = styled(Box)(({theme}) => {
//   padding: 1,
//   backgroundColor: theme.palette.success.main,
//   border-radius: 5px,
//   box-shadow: 0 3px 10px #888888,
// })

const UserInventory = ({ user }) => {
  const [inventory, setInventory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const { user : dbUser} = useAuth();
  const isOwner = (dbUser?.username === user?.username);

  return (
    <Box>
      <StyledBox sx={{ maxHeight: '30%' }}>
        <Header />
        <Grid container direction={{ md:'row'}} spacing={2}>
          {
            inventory.map((listing, idx) => {
              return (
                <Grid item key={idx} xs={12} sm={6} md={3}>
                  <ItemCard>
                    <HeaderWithIcons product={listing} showWatchesIcon clickable={!isOwner} product/>
                  </ItemCard>
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
  max-height: 20%;
  overflow-y: auto;
  width: auto;
  max-width: 100%;
  box-shadow: 0 3px 10px #888888;
`

