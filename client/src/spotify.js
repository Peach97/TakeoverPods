export const SPOTIFY_AUTHORIZE_ENDPOINT =
  "http://accounts.spotify.com/authorize";
const clientId = "2b11953bfb6a45b881eb61e74ca89493";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-read-email",
  "user-read-private",
  "streaming",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
