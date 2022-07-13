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
  const [{ token, item, playing }, dispatch] = useStateValue();
  console.log(item);
  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((r) => {
  //     console.log(r);

  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: r.is_playing,
  //     });

  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // }, [spotify, dispatch]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "95%",
          overflow: "hidden",
          alignItems: "center",
          display: "flex",
          p: "0.5rem",
        }}
      >
        <Box sx={{ display: "flex", pl: "0.25rem" }}>
          <CoverImage>
            <img src={item?.images[0].url} alt="" />
          </CoverImage>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            p: "0.25rem",
          }}
        >
          <Box sx={{ display: "flex", ml: 1.5, minWidth: 0, width: "100%" }}>
            <div
              style={{
                flexGrow: "1",
                justifyContent: "center",
                flexDirection: "column",
                display: "flex",
                width: "100%",
                lineHeight: "normal",
                color: "#F0FAFF",
              }}
            >
              {item ? (
                <Box>
                  <Typography
                    color="background.default"
                    noWrap
                    fontSize="1.5rem"
                  >
                    <b>{item.show.publisher} </b>
                  </Typography>
                  <Typography
                    color="background.default"
                    noWrap
                    letterSpacing={-0.25}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography
                    color="background.default"
                    noWrap
                    fontSize="1.5rem"
                  >
                    <b>...</b>
                  </Typography>
                  <Typography
                    color="background.default"
                    noWrap
                    letterSpacing={-0.25}
                  >
                    No track currently playing
                  </Typography>
                </Box>
              )}
            </div>
            <Box
              width="25%"
              sx={{
                display: "flex",
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "block",
                  justifyContent: "center",
                }}
              >
                <Box
                  width="100%"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* <IconButton onClick={skipPrevious} aria-label="previous song">
                      <FastRewindRounded
                        sx={{ color: "background.default" }}
                        fontSize="medium"
                      />
                    </IconButton> */}
                  <PlayButton
                    onClick={() => handlePlayPause()}
                    sx={{
                      border: "1px solid",
                      borderColor: "background.default",
                      borderRadius: "16px",
                      height: "2rem",
                    }}
                  >
                    {!playing ? (
                      <PlayArrowRounded
                        sx={{ fontSize: "2rem", color: "background.default" }}
                      />
                    ) : (
                      <PauseRounded
                        sx={{ fontSize: "2rem", color: "background.default" }}
                      />
                    )}
                  </PlayButton>
                  {/* <IconButton onClick={skipNext} aria-label="next-song">
                      <FastForwardRounded
                        sx={{ color: "background.default" }}
                        fontSize="medium"
                        
                      />
                    </IconButton> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Stack
                    display="flex"
                    width="100%"
                    spacing={1}
                    direction="row"
                    sx={{ mb: 1, px: 1 }}
                    alignItems="center"
                  >
                    <VolumeDownRounded sx={{ color: "background.default" }} />
                    <Slider
                      aria-label="Volume"
                      defaultValue={30}
                      sx={{
                        color: "#D31027",
                        "& .MuiSlider-track": {
                          border: "none",
                        },
                        "& .MuiSlider-thumb": {
                          width: 12,
                          height: 12,
                          backgroundColor: "#D31027",
                          "&:before": {
                            boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                          },
                          "&:hover, &.Mui-focusVisible, &.Mui-active": {
                            boxShadow: "none",
                          },
                        },
                      }}
                    />
                    <VolumeUpRounded sx={{ color: "background.default" }} />
                  </Stack>
                </Box>
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AudioPlayer;
