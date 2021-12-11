import { useState } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/placeholder-propic.png'
import {
  Stack,
  Divider,
  Typography,
  Box,
  Button
} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import EditIcon from '@mui/icons-material/Edit'

const UserInfo = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [username, setUsername] = useState('username');
  const [bio, setBio] = useState('some text');
  const [isEditing, setIsEditing] = useState(false);

  const isOwnerAndAuthenticated = isAuthenticated && username === 'username'

  // useEffect hook to fetch the user profile info. only fetch transaction history if
  // user is authenticated and is the owner of the page.

  return (
    <Stack>
      <div>
        UserInfo
      </div>
      <div>
        <Image
          src={profilePic}
          height={200}
          width={200}
          alt="profile picture"
        />
      </div>
      <Typography>
        Name: {username}
      </Typography>
      <Typography>
        Location:
      </Typography>
      <Typography>
        Rating:
      </Typography>
      <Typography>
        Bio:
      </Typography>
      <br />
      <Typography variant='body1' align='center'>
        {bio}
      </Typography>
      {isOwnerAndAuthenticated && <Typography>Transactions</Typography>}
      <Box>
        {isOwnerAndAuthenticated && !isEditing && <Button variant='contained' startIcon={<EditIcon />} size='large' onClick={() => setIsEditing(!isEditing)}>Edit</Button>}
        {isOwnerAndAuthenticated && isEditing && <Button variant='contained' startIcon={<SaveIcon />} size='large' onClick={() => setIsEditing(!isEditing)}>Save</Button>}
      </Box>
    </Stack>
  )
}

export default UserInfo
