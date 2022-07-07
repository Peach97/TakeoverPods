import react, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useStateValue } from "./StateProvider";
import axios from "axios";
import qs from "qs";
import Loading from "./components/HeroSection/Loading";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { App } from "./App.js";

const s = new SpotifyWebApi();
export default function ToggleColorMode() {
  //wrapper for color mode toggle which will also contain spotify api calls as dispatch value is declared for redux in the app component
  const [{ token }, dispatch] = useStateValue();
  //declare the use of Context API value for 'dispatch'
  useEffect(() => {
    async function getToken(
      client_id = process.env.client_id,
      client_secret = process.env.client_secret
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
        console.log(_token);
        localStorage.setItem("token", _token);
      } catch (error) {
        console.log(error);
      }
    }
    getToken();
  }, []);

  useEffect(() => {
    const findToken = async () => {
      let _token = localStorage.getItem("token");
      return _token;
    };
    //retrieve token from API and store it in local storage
    const search = async () => {
      let _token = await findToken();
      if (_token) {
        s.setAccessToken(_token);
      }
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: s,
      });
      // async function to get token value and dispatch it to context provider
      const getPlaylists = async () => {
        let _token = await findToken();
        console.log(_token);
        const playlistHeaders = { Authorization: `Bearer ${_token}` };

        try {
          const { data } = await axios.get(
            "https://api.spotify.com/v1/playlists/5yR4WrjiekKXCANhCmdnRW/tracks?market=FI",
            {
              headers: playlistHeaders,
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
    };
    //retrieve playlist items/tracks using access token in headers
    setTimeout(search, 3000);
    //timeout for smoother loading animation
  }, [token, dispatch]);
  //useEffect dependencies to end loop - requires token to be dispatched to context provider
  const [toggleDark, setToggleDark] = useState(true);
  const myTheme = createTheme({
    palette: {
      mode: toggleDark ? "dark" : "light",
    },
  });
  //toggling the MUI palette mode between light and dark
  return (
    <ThemeProvider theme={myTheme}>
      {!token && <Loading />}
      {token && (
        <App
          toggleDark={toggleDark}
          setToggleDark={setToggleDark}
          spotify={s}
        />
      )}
    </ThemeProvider>
  );
}
