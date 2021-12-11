import { useState } from 'react';
import styled from 'styled-components';
import {
  Box,
  Stack,
  Switch,
  Button,
  Typography,
  TextField,
  Fab
} from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { Theme, Fonts } from '../components/Theme.js';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80%;
  border: #343a40 5px solid;
  padding: 10px;
`

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  width: 20%;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  height: 10%;
`

const FabContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ signUpView, setSignUpView ] = useState(true);

  const handleSwitchChange = () => {
    setSignUpView(!signUpView);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <LoginContainer className='login-container' style={{fontFamily: Fonts.heading}}>
        <div style={{fontSize: '50px'}}>
          Welcome {signUpView ? 'back ' : null}to
          <span className='logo' style={{fontFamily: Fonts.logo, color: Theme.secondary.main}}> Marxet</span>
        </div>
        <SwitchContainer >
          <span style={{marginTop: '7px'}}>Sign in</span>
          <Switch
            onChange={handleSwitchChange}
            classes={{
              track: Theme.primary.main
            }}
            inputProps={{ 'aria-label': 'ant design' }} />
          <span style={{marginTop: '7px'}}>Sign up</span>
        </ SwitchContainer>
        <InputContainer >
          <TextField
            id='username-field'
            variant='outlined'
            label='Username or E-mail'
            required
            color='secondary'
            onChange={handleUsernameChange}
            sx={{paddingBottom: '5px'}}
          />
          <TextField
            id='password-field'
            variant='outlined'
            label='Password'
            required
            color='secondary'
            onChange={handlePasswordChange}
            value={password}
            sx={{paddingBottom: '5px'}}
          />
          <Button variant='outlined' color='secondary' sx={{paddingTop: '5px'}}>
            Go
          </Button>
        </ InputContainer>
        <div>
          <div style={{marginBottom: '15px'}}>Sign {signUpView ? 'in' : 'up'} with</div>
          <FabContainer>
            <Fab id='google-login' color='secondary' style={{marginRight: '5px'}}>
              <Google />
            </Fab>
            <br />
            <Fab id='facebook-login' color='secondary' style={{marginLeft: '5px'}}>
              <Facebook />
            </Fab>
          </FabContainer>
        </div>
    </LoginContainer>
  )
}

export default Login;
