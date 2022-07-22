import styled from "@emotion/styled";
import { IconButton, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import "./AudioPlayer.css";
import { theme } from "../Navbar/Navbar";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import Stack from "@mui/material/Stack";
import episodeimage from "../../images/michigan-stadium.jpg";
import { useMediaQuery } from "@mui/material";
import { useStateValue } from "../../StateProvider";
import { getTokenFromResponse } from "../../spotify.js";
import SpotifyLoginButton from "../../SpotifyLoginButton";
import SpotifyPlayer from "react-spotify-web-playback";

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  borderRadius: "8px",
  flexShrink: 0,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
    height: "100%",
  },
});

const PlayButton = styled(IconButton)({
  "&:hover": {
    backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  },
});

const TimeIndicator = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

// let node = document.getElementById("yt-btn");
// if (node.parentNode) {
//   node.parentNode.removeChild(node);
// }
function AudioPlayer({ spotify }) {
  const [{ premiumToken, item }] = useStateValue();
  const [play, setPlay] = useState(false);
  const [itemOffset, setItemOffset] = useState(null);

  useEffect(() => {
    setItemOffset(item);
    setPlay(true);
  }, [item]); // const [{ token, item, playing }, dispatch] = useStateValue();

  return (
    <>
      <Box
        width="100%"
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          padding: "0 1rem 0 1rem",
        }}
      >
        <SpotifyPlayer
          token={premiumToken}
          offset={itemOffset}
          callback={(state) => {
            if (!state.isPlaying) setPlay(false);
          }}
          uris={["spotify:playlist:5yR4WrjiekKXCANhCmdnRW"]}
          play={play}
          styles={{
            sliderColor: "#D31027",
            sliderHandleColor: "#D31027",
            height: "4rem",
            bgColor: "inherit",
            color: "inherit",
            loaderColor: "#D31027",
            trackArtistColor: "inherit",
            trackNameColor: "inherit",
          }}
        />
      </Box>
    </>
  );
}

export default AudioPlayer;
