import { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Stack,
  Switch,
  Typography,
  TextField,
  Fab
} from '@mui/material';
import { GoogleIcon, FacebookIcon } from '@mui/icons-material';
import { theme } from '../Theme.js';

const AntSwitch = styled(Switch)((theme) => {
  width: '40px',
  height: '15px',
  backgroundColor: theme.primary.dark,
  color: theme.primary.light,
});

const Login = () => {
  const [ signInView, setSignInView ] = useState(true);

  const handleChange = () => {
    setSignInView(!signInView);
  }

  return (
    <Box
      component='form'
      // sx='?'
    >
      <div>
        Welcome {signInView ? 'back ' : null}to <b>Marxet</b>
      </div>
      <Stack direction='row' spacing={1} alignItems='center' >
        <Typography>Sign in</Typography>
        <AntSwitch
          onChange={handleChange}
          defaultChecked
          inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>Sign up</Typography>
      </ Stack>
      <br />
      <Stack direction='column' spacing={1} alignItems='center' >
        <TextField
          id='username-field'
          variant='outlined'
          type='username'
          label='Username or E-mail'
          required='true'
        />
        <TextField
          id='password-field'
          variant='outlined'
          type='password'
          label='Password'
          required='true'
        />
      </ Stack>
      <br />
      <div>
        Sign {signInView ? 'in' : 'up'} with
        <Stack direction='row' spacing={1} alignItems='center' >
          <Fab id='google-login' >
            <GoogleIcon />
          </Fab>
          <Fab id='facebook-login' >
            <FacebookIcon />
          </Fab>
        </ Stack>
      </div>
    </ Box>
  )
}

export default Login;