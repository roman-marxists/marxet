import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import UserInventory from './UserInventory';
import UserReviews from './UserReviews';
import UserWishlist from './UserWishlist';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useAuth } from '@context/auth';
import { doGetUserData } from '@api/user';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  console.log("🚀 ~ file: index.js ~ line 13 ~ UserProfile ~ user", user)

  useEffect(async () => {
    try {
      console.log("🚀 ~ file: index.js ~ line 17 ~ UserProfile ~ user", user)
      const data = await doGetUserData(userId);
      console.log({data})
      setUser(data);
    } catch (e) {
      setUser(null);
      console.error(e);
    }
  }, [userId])

  return (
    <Container>
      <Grid container direction='row' spacing={3}>
        <Grid item md={3}>

          <UserInfo user={user}
            // sx={{
            //   minHeight: 500,
            //   minWidth: 300,
            // }}
          />
        </Grid>
        <Grid item container md={9} direction='column' spacing={3}>
          <Grid item>
            <UserInventory user={user} listings={user?.listings}/>
          </Grid>
          <Grid item container direction={{ xs:'column', md:'row'}} spacing={3}>
            <Grid item md={6}>
              <UserWishlist user={user}/>
            </Grid>
            <Grid item md={6}>
              <UserReviews user={user}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
