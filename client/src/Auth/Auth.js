import React, { useState, useEffect } from "react";
import "./Auth.css";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Input from "./Input.js";
import takeover from "../images/TAKEOVER LOGO.png";
import styled from "@emotion/styled";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { AUTH } from "../constants/actionTypes.js";
import { auth } from "./firebase-config";
import { useStateValue } from "../StateProvider.js";

import { signin } from "../actions/auth.js";

const AuthButton = styled(Button)({
  backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  color: "#fff",
  textTransform: "none",

  "&:hover": {
    filter: "brightness(110%)",
    color: "#fff",
  },
});
const initialState = { email: "", password: "" };

function Auth() {
  const [{ authUser }, dispatch] = useStateValue();
  const [form, setForm] = useState(initialState);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);
  const login = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      dispatch({
        type: "SET_AUTH",
        authUser: user,
      });
      console.log(authUser);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    await signOut(auth);
    dispatch({
      type: "SET_AUTH",
      authUser: null,
    });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   dispatch(signin(form, navigate));
  // };
  console.log(loginEmail);
  console.log(loginPassword);

  return (
    <div>
      <Box
        className="auth-box"
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Typography
          gutterBottom
          component="div"
          variant="h4"
          color="text.primary"
        >
          Add to the Blog
        </Typography>
        <Typography
          component="div"
          sx={{ maxWidth: "50%" }}
          variant="body1"
          color="text.secondary"
        >
          If you would like to add to the blog or reach out to the network
          directly, please use the contact form below.{" "}
        </Typography>
        <Divider
          sx={{ width: "90%", color: "text.primary", padding: "5rem 0 5rem 0" }}
        >
          Sign In
        </Divider>
        <Paper className="auth-paper" elevation={3}>
          <Avatar src={takeover} alt="" />

          {user ? (
            <>
              <Typography sx={{ padding: "2.5rem 0 2.5rem 0" }} variant="h5">
                Welcome {user?.email}!
              </Typography>
              <Divider sx={{ width: "90%", margin: "2.5rem 0 2.5rem 0" }} />
              <Typography variant="body1" color="text.secondary">
                Head over to the blog where you can now create/edit posts!
              </Typography>
              <CheckCircleRoundedIcon
                fontSize="large"
                sx={{ p: "2.5rem 0 2.5rem 0" }}
              />
              <AuthButton
                onClick={logout}
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Out
              </AuthButton>
            </>
          ) : (
            <form onSubmit={login}>
              <Grid container>
                <Grid md={12} xs={12}>
                  <Input
                    name="email"
                    label="Email"
                    handleChange={(e) => {
                      setLoginEmail(e.target.value);
                    }}
                    autoFocus
                    type="email"
                  />
                </Grid>
                <Grid md={12} xs={12}>
                  <Input
                    name="password"
                    label="Password"
                    handleChange={(e) => {
                      setLoginPassword(e.target.value);
                    }}
                    autoFocus
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                  />
                </Grid>
              </Grid>
              <AuthButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </AuthButton>
            </form>
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default Auth;
