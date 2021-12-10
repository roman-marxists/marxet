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
import { theme } from '../Theme.js';

const AntSwitch = styled(Switch)((theme) => {
  width: '40px',
  height: '15px',
  backgroundColor: theme.primary.dark,
  color: theme.primary.light,
});

const Login = () => {
  const [ signInView, setSignInView ] = useState(true);

  return (
    <Box
      component='form'
      // sx='?'
    >
      <Stack direction='row' spacing={1} alignItems='center' >
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
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
          id='username-field'
          variant='outlined'
          type='username'
          label='Username or E-mail'
          required='true'
        />
      </ Stack>
    </ Box>
  )
}

export default Login;