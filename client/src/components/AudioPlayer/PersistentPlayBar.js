import React, { useState, useEffect } from "react";
import "./PersistentPlayBar.css";
import AudioPlayer from "./AudioPlayer";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";
import SpotifyLoginButton from "../../SpotifyLoginButton";
import { useStateValue } from "../../StateProvider";
import { getTokenFromResponse } from "../../spotify";
import axios from "axios";

export default function PersistentPlayBar({ isOpen, setMenuStatus, spotify }) {
  const [minimized, setMinimized] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [{ token, devices }, dispatch] = useStateValue();
  // useEffect(() => {
  //   if (window.location.hash !== "") {
  //     const hash = getTokenFromResponse();
  //     const userToken = hash.access_token;
  //     localStorage.setItem("userToken", userToken);
  //   }
  // }, []);

  // useEffect(() => {
  //   const confirmToken = async () => {
  //     let passUserToken = localStorage.getItem("userToken");
  //     return passUserToken;
  //   };
  //   const setUserToken = async () => {
  //     var newUserToken = await confirmToken();
  //     if (newUserToken) {
  //       spotify.setAccessToken(newUserToken);
  //       dispatch({
  //         type: "SET_TOKEN",
  //         token: newUserToken,
  //       });
  //       spotify.getMe().then((user) => {
  //         console.log(user);
  //         dispatch({
  //           type: "SET_USER",
  //           user,
  //         });
  //       });
  //       spotify.getMyDevices().then((devices) => {
  //         console.log(devices);
  //         dispatch({
  //           type: "SET_DEVICES",
  //           devices: devices.body.devices,
  //         });
  //       });
  //     } else {
  //       console.log("User token:" + newUserToken);
  //     }
  //   };
  //   setUserToken();
  // }, [spotify, token, dispatch]);

  return (
    <Typography
      sx={{
        bgcolor: "text.primary",
        backdropFilter: `blur(20px)`,
      }}
      component="div"
      id="playbar"
      className={isOpen ? "open" : ""}
    >
      <AudioPlayer spotify={spotify} />
      <IconButton
        disableRipple
        sx={{ height: 0, width: 0, marginRight: "0.5rem" }}
      >
        {minimized ? (
          <KeyboardArrowDownIcon
            onClick={() => {
              setMenuStatus(true);
              setIsMinimized(true);
              setMinimized(false);
            }}
            sx={{
              color: "background.default",
              p: "0.2rem",
              fontSize: "1.5rem",
              m: "auto",
            }}
          />
        ) : (
          <KeyboardArrowUpIcon
            id="maximize-btn"
            className={minimized ? "show" : ""}
            onClick={() => {
              setMenuStatus(false);
              setIsMinimized(false);
              setMinimized(true);
            }}
            sx={{
              color: "background.default",
              p: "0.75rem",
              backdropFilter: `blur(20px)`,
              m: "auto",
              backgroundColor: "text.secondary",
              borderRadius: "8px",
              fontSize: "1.5rem",
              zIndex: 999,
            }}
          />
        )}
      </IconButton>
    </Typography>
  );
}
