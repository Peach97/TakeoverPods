import SpotifyWebApi from "spotify-web-api-node";
import { useStateValue } from "./StateProvider";
import { SET_SHOWS, SET_TOKEN, SET_USER } from "./constants/actionTypes";
import { getTokenFromResponse } from "./spotify.js";
import react, { useEffect } from "react";

const s = new SpotifyWebApi();

var [{ token }, dispatch] = useStateValue();
useEffect(() => {
  const hash = getTokenFromResponse();
  window.location.hash = "";
  let _token = hash.access_token;

  if (_token) {
    s.setAccessToken(_token);
  }
  console.log(token);
  dispatch({ type: "SET_TOKEN", token: _token });
});
s.getMe().then((user) => {
  dispatch({
    type: "SET_USER",
    user,
  });
});

s.getShows(
  "6ah3CP9MuCOfcaxQoyMppH",
  "2qqyNtw0uq6icQ6OY8RtwZ",
  "5t4rKrG9qjKMfaxqSQwHlN",
  "6nkTjeAR2SkVsdLMIOcC9k",
  "7InirXvB5WxaOc73oTo70C"
).then((response) =>
  dispatch({
    type: "SET_SHOWS",
    shows: response,
  })
);
