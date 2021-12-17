import { useState } from "react";
import Image from "next/image";
import profilePic from "@images/placeholder-propic.png";
import { Stack, Divider, Typography, Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "@context/auth";

const UserInfo = ({user}) => {
  const [username, setUsername] = useState("username");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  const { user : dbUser} = useAuth();
  const isAuthenticated = (dbUser) ? true : false;
  const isOwnerAndAuthenticated = isAuthenticated && user?.username === dbUser?.username;

  // useEffect hook to fetch the user profile info. only fetch transaction history if
  // user is authenticated and is the owner of the page.

  return (
    <Stack className='.plain-text' spacing={{ xs: 0, md: 1 }} sx={{margin: "15px", alignItems: "center"}}>
      <div>
        <Image
          src={profilePic}
          height={200}
          width={200}
          alt='profile picture'
        />
      </div>
      <Typography>Name: {user?.username}</Typography>
      <Typography>Location: {user?.zipcode}</Typography>
      <Typography>Rating:</Typography>
      <Typography>Bio: {user?.bio}</Typography>
      <Typography variant='body1' align='center'>
        {bio ||
          "Hi, my name is " +
            user?.username +
            " and I love redistributing my wealth."}
      </Typography>
      {isOwnerAndAuthenticated && <Typography>Transactions</Typography>}
      <Box textAlign='center'>
        {isOwnerAndAuthenticated && !isEditing && (
          <Button
            variant='contained'
            startIcon={<EditIcon />}
            size='large'
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </Button>
        )}
        {isOwnerAndAuthenticated && isEditing && (
          <Button
            variant='contained'
            startIcon={<SaveIcon />}
            size='large'
            onClick={() => setIsEditing(!isEditing)}
          >
            Save
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default UserInfo;
