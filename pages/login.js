import { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Stack,
  Switch,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Fab,
} from "@mui/material";
import { Google, Facebook, Visibility } from "@mui/icons-material";
import { Theme, Fonts } from "../components/Theme.js";
import Router from "next/router";

import { useAuth } from "@context/auth";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80%;
  border: #343a40 5px solid;
  padding: 10px;
`;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  width: 20%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 40%;
  height: 10%;
`;

const FabContainer = styled.span`
  display: flex;
  flex-direction: row;
`;

const Login = () => {
  const { signin, signup } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [signUpView, setSignUpView] = useState(true);

  const handleSwitchChange = () => {
    setSignUpView(!signUpView);
  };

  const handleVisibleClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Your passwords do not match. Please try again.");
      setPassword("");
      setConfirmPassword("");
    } else {
      signup(email, password);
      setPassword("");
      setConfirmPassword("");
      handleSwitchChange();
      Router.push("/");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    signin(email, password);
    setPassword("");
    Router.push("/");
  };

  return (
    <LoginContainer
      className="login-container"
      style={{ fontFamily: Fonts.heading }}
    >
      <div id="welcome-message" style={{ fontSize: "40px", marginTop: "30px" }}>
       Welcome {signUpView ? "back " : null}to
        <span
          className="logo"
          style={{ fontFamily: Fonts.logo, color: Theme.secondary }}
        >
          {" "}
          Marxet
        </span>
      </div>
      <SwitchContainer
        style={{ marginBottom: "40px", marginTop: "25px"}}
      >
        <span style={{ marginTop: "7px" }}>Sign in</span>
        <Switch
          onChange={handleSwitchChange}
          classes={{
            track: Theme.primary.main,
          }}
          inputProps={{ "aria-label": "ant design" }}
        />
        <span style={{ marginTop: "7px" }}>Sign up</span>
      </SwitchContainer>
      <InputContainer>
        <TextField
          id="email-field"
          variant="outlined"
          label="E-mail"
          color="secondary"
          required
          onChange={handleEmailChange}
          sx={{ paddingBottom: "5px" }}
        />
        {!signUpView ? (
          <TextField
            id="username-field"
            variant="outlined"
            label="Username"
            color="secondary"
            required
            onChange={handleUsernameChange}
            sx={{ paddingBottom: "5px" }}
          />
        ) : null}
        <TextField
          id="password-field"
          type={passwordVisible ? "text" : "password"}
          variant="outlined"
          label="Password"
          value={password}
          color="secondary"
          required
          onChange={handlePasswordChange}
          value={password}
          sx={{ paddingBottom: "5px" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle-password-visible"
                  onClick={handleVisibleClick}
                >
                  <Visibility />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {!signUpView ? (
          <TextField
            id="confirm-password-field"
            type={passwordVisible ? "text" : "password"}
            variant="outlined"
            label="Confirm your password"
            value={confirmPassword}
            color="secondary"
            required
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            sx={{ paddingBottom: "5px" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle-password-visible"
                    onClick={handleVisibleClick}
                  >
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ) : null}
        <Button
          variant="outlined"
          color="secondary"
          sx={{ paddingTop: "5px" }}
          type="submit"
          onClick={signUpView ? handleSignIn : handleRegister}
        >
          Go
        </Button>
      </InputContainer>
      <div style={{ marginBottom: "15px", marginTop: "100px" }}>
        Sign {signUpView ? "in" : "up"} with
        <br />
        <Fab id="google-login" color="secondary" style={{ marginTop: "10px" }}>
          <Google />
        </Fab>
      </div>
    </LoginContainer>
  );
};

export default Login;
