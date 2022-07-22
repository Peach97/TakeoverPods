import react, { useEffect, useState, useCallback } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useStateValue } from "./StateProvider";
import axios from "axios";
import qs from "qs";
import Loading from "./components/HeroSection/Loading";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { App } from "./App.js";
import { getTokenFromResponse } from "./spotify";

const s = new SpotifyWebApi();
export default function ContextWrapper() {
  //wrapper for color mode toggle which will also contain spotify api calls as dispatch value is declared for redux in the app component
  const [{ token, premiumToken, playlist }, dispatch] = useStateValue();
  const [accessToken, setAccessToken] = useState(null);
  const [toggleDark, setToggleDark] = useState(true);
  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });

  useEffect(() => {
    s.resetAccessToken();
  }, []);
  //reset access token on app render so expired token is not used
  useEffect(() => {
    async function getToken(
      client_id = `${process.env.REACT_APP_ID}`,
      client_secret = `${process.env.REACT_APP_SECRET}`
    ) {
      const headers = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: client_id,
          password: client_secret,
        },
      };
      //define headers
      const data = {
        grant_type: "client_credentials",
      };
      try {
        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          qs.stringify(data),
          headers
        );
        let _token = response.data.access_token;
        s.setAccessToken(_token);
        dispatch({
          type: "SET_TOKEN",
          token: _token,
        });
        setAccessToken(_token);
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, [dispatch]);
  // on app render get client credential token

  useEffect(() => {
    if (!premiumToken) {
      if (window.location.hash !== "") {
        const hash = getTokenFromResponse();
        const _premiumToken = hash.access_token;
        s.setAccessToken(_premiumToken);
        dispatch({
          type: "SET_PREMIUM_TOKEN",
          premiumToken: _premiumToken,
        });
        s.getMe().then((user) => {
          dispatch({
            type: "SET_USER",
            user,
          });
        });
        //once generated replace cient credential with premium token in context provider
        console.log("Using premium token: " + _premiumToken);
        //check for premium token generation
      } else {
        console.log("Using free token");
      }
      //determine whether or not a premium token has been attained
    }
  });

  useEffect(() => {
    const getPlaylists = async () => {
      const freeHeaders = { Authorization: `Bearer ${accessToken}` };
      //context provider token value as 'authorization' for playlists call
      try {
        const { data } = await axios.get(
          "https://api.spotify.com/v1/playlists/5yR4WrjiekKXCANhCmdnRW/tracks?market=FI",
          {
            headers: freeHeaders,
          }
        );
        dispatch({
          type: "SET_PLAYLIST",
          playlist: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getPlaylists();
  }, [accessToken, dispatch]);
  const playSong = (id) => {
    dispatch({
      type: "SET_ITEM",
      item: id,
    });
  };
  //get playlists from Spotify API after attainment of token

  //get user
  //get+transfer playback state
  //render application
  //toggling the MUI palette mode between light and dark

  return (
    <ThemeProvider theme={myTheme}>
      {!playlist && <Loading />}
      {playlist && (
        <App
          toggleDark={toggleDark}
          setToggleDark={setToggleDark}
          spotify={s}
          playSong={playSong}
        />
      )}
    </ThemeProvider>
  );
  //render application first using content from client credential token
}
