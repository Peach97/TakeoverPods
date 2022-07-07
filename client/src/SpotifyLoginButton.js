import react from "react";
import { Button } from "@mui/material";
import { accessUrl } from "./spotify";

import React from "react";

function SpotifyLoginButton() {
  return (
    <div>
      <Button
        sx={{ position: "fixed", zIndex: 999, top: "50%", left: "60%" }}
        variant="contained"
        href={accessUrl}
      >
        Login to Spotify
      </Button>
    </div>
  );
}

export default SpotifyLoginButton;
