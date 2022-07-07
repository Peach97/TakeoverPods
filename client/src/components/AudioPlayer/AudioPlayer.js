import styled from "@emotion/styled";
import { IconButton, Slider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
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
const AudioPlayer = () => {
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const duration = 200;
  const [position, setPosition] = useState(32);
  const [paused, setPaused] = useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <>
      {matches ? (
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
              <img src={episodeimage} alt="" />
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
                }}
              >
                <Typography noWrap fontSize="1.5rem" color="background.default">
                  <b>Title </b>
                </Typography>
                {/* <Box id="yt-btn">
                  <div
                    src="https://apis.google.com/js/platform.js"
                    class="g-ytsubscribe"
                    data-channelid="UCXd9541vxjUHIF8kV-FsCZQ"
                    data-layout="default"
                    data-count="default"
                  ></div>
                </Box> */}

                <Box
                  width="100%"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    mt: -1,
                  }}
                >
                  <Box display="flex" width="100%">
                    <Slider
                      aria-label="time indicator"
                      size="small"
                      value={position}
                      min={0}
                      step={1}
                      max={duration}
                      onChange={(_, value) => SVGTextPositioningElement(value)}
                      sx={{
                        flexGrow: "1",
                        color: "#D31027",
                        height: 4,
                        "& .MuiSlider-thumb": {
                          width: 8,
                          height: 8,
                          transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                          "&:before": {
                            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                          },
                          "&:hover, &.MuifocusVisible": {
                            boxShadow: `0px 0px 0px 8px ${
                              theme.palette.text.primary === "primary"
                                ? "rgb(255 255 255 / 16%)"
                                : "rgb(0 0 0 /16%)"
                            }`,
                          },
                          "&.Mui-active": {
                            width: 20,
                            height: 20,
                          },
                        },
                        "& .MuiSlider-rail": {
                          opacity: 0.28,
                        },
                      }}
                    />
                  </Box>
                  <div>
                    <TimeIndicator>{formatDuration(position)}</TimeIndicator>
                    <TimeIndicator p={0.5}>/</TimeIndicator>
                    <TimeIndicator>
                      {formatDuration(duration - position)}
                    </TimeIndicator>
                  </div>
                </Box>
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
                    <PlayButton
                      aria-label={paused ? "play" : "pause"}
                      onClick={() => setPaused(!paused)}
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        borderRadius: "8px",
                        height: "2rem",
                        color: "background.default",
                      }}
                    >
                      {paused ? (
                        <PlayArrowRounded
                          color="background.default"
                          sx={{ fontSize: "2rem" }}
                        />
                      ) : (
                        <PauseRounded
                          color="background.default"
                          sx={{ fontSize: "2rem" }}
                        />
                      )}
                    </PlayButton>
                  </Box>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
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
              <img src={episodeimage} alt="" />
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
                <Typography color="background.default" noWrap fontSize="1.5rem">
                  <b>Title </b>
                </Typography>
                <Typography
                  color="background.default"
                  noWrap
                  letterSpacing={-0.25}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                {/* <Box id="yt-btn">
                  <div
                    src="https://apis.google.com/js/platform.js"
                    class="g-ytsubscribe"
                    data-channelid="UCXd9541vxjUHIF8kV-FsCZQ"
                    data-layout="default"
                    data-count="default"
                  ></div>
                </Box> */}
                <Box display="flex" width="100%">
                  <Slider
                    aria-label="time indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={duration}
                    onChange={(_, value) => SVGTextPositioningElement(value)}
                    sx={{
                      flexGrow: "1",
                      color: "#D31027",

                      height: 4,
                      "& .MuiSlider-thumb": {
                        width: 8,
                        height: 8,
                        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                        "&:before": {
                          boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                        },
                        "&:hover, &.MuifocusVisible": {
                          boxShadow: `0px 0px 0px 8px ${
                            theme.palette.text.primary === "primary"
                              ? "rgb(255 255 255 / 16%)"
                              : "rgb(0 0 0 /16%)"
                          }`,
                        },
                        "&.Mui-active": {
                          width: 20,
                          height: 20,
                        },
                      },
                      "& .MuiSlider-rail": {
                        opacity: 0.28,
                      },
                    }}
                  />
                </Box>
                <Box
                  width="100%"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: -1,
                  }}
                >
                  <TimeIndicator>{formatDuration(position)}</TimeIndicator>
                  <TimeIndicator>
                    -{formatDuration(duration - position)}
                  </TimeIndicator>
                </Box>
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
                    <IconButton aria-label="previous song">
                      <FastRewindRounded
                        sx={{ color: "background.default" }}
                        fontSize="medium"
                      />
                    </IconButton>
                    <PlayButton
                      aria-label={paused ? "play" : "pause"}
                      onClick={() => setPaused(!paused)}
                      sx={{
                        border: "1px solid",
                        borderColor: "background.default",
                        borderRadius: "16px",
                        height: "2rem",
                      }}
                    >
                      {paused ? (
                        <PlayArrowRounded
                          sx={{ fontSize: "2rem", color: "background.default" }}
                        />
                      ) : (
                        <PauseRounded
                          sx={{ fontSize: "2rem", color: "background.default" }}
                        />
                      )}
                    </PlayButton>
                    <IconButton aria-label="next-song">
                      <FastForwardRounded
                        sx={{ color: "background.default" }}
                        fontSize="medium"
                      />
                    </IconButton>
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
      )}
    </>
  );
};

export default AudioPlayer;
