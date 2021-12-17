import { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import UserInventory from "./UserInventory";
import UserReviews from "./UserReviews";
import UserWishlist from "./UserWishlist";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useAuth } from "@context/auth";
import { doGetUserData } from "@api/user";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [user, setUser] = useState(null);

  useEffect(async () => {
    try {
      const data = await doGetUserData(userId);
      setUser(data);
    } catch (e) {
      setUser(null);
      console.error(e);
    }
  }, [userId]);

  return (
    <Container>
      <Grid container direction="row" spacing={3}>
        <Grid item md={3}>

          <UserInfo user={user}
            // sx={{
            //   minHeight: 500,
            //   minWidth: 300,
            // }}
          />
        </Grid>
        <Grid item container md={9} direction="column" spacing={3}>
          <Grid item>
            <UserInventory user={user} listings={user?.listings} />
          </Grid>
          <Grid
            item
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
          >
            <Grid item md={6}>
              <UserWishlist user={user} />
            </Grid>
            <Grid item md={6}>
              <UserReviews user={user} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile;
