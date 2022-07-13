import { Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import "./HeroSection.css";
import { Box } from "@mui/system";
import UnstyledButtonCustom from "./ButtonCustom";
import { useSelector } from "react-redux";
import { useStateValue } from "../../StateProvider.js";
import moment from "moment";
import SpotifyLoginButton from "../../SpotifyLoginButton";
import ConfirmDialog from "../ConfirmButton.js";
import { useHref } from "react-router-dom";
import { accessUrl } from "../../spotify.js";

let expression = true;

export function toggle() {
  expression = !expression;
}

export default function HeroSection({
  setMenuStatus,
  spotify,
  playSong,
  track,
}) {
  const [{ playlist, user }, dispatch] = useStateValue();
  const [confirmOpen, setConfirmOpen] = useState();
  const handleClick = () => {
    window.open(`${accessUrl}`);
  };
  console.log(user);

  // const [{ shows }, dispatch] = useStateValue();
  // console.log(shows.body);
  // // const videos = useSelector((state) => state.videos);
  // // function lastItem(data) {
  // //   console.log("data", data);
  // //   var list_title = data.items[data.items.length -1].snippet.title;
  // //   var list_thumbnail = data.items[data.items.length -1].snippet.thumbnail.medium;
  // //   var list_description = data.items[data.items.length -1].snippet.description;
  // //   $('.list_title').append(list_title)
  // //   $('.list_thumbnail').append(list_thumbnail)
  // //   $('.list_description').append(list_description)
  // // }
  return (
    <div className="hero-container" id="hero-container">
      <div>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Grid
          container
          justifyContent="start"
          p={20}
          spacing={{ md: 25, sm: 15, xs: 10 }}
        >
          <Grid
            item
            mt={5}
            xs={11}
            sm={11}
            md={7}
            sx={{ justifyContent: "start", display: "flex" }}
          >
            <Box position="relative" sx={{ color: "#fff" }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "700",
                  textShadow: "1.5px 5px 5px #00000095",
                }}
                mb={2.5}
              >
                Latest Episode
              </Typography>

              <Typography
                className="description-text"
                fontWeight={600}
                variant="h4"
                gutterBottom
              >
                {playlist?.items[0].track.artists[0].name}
              </Typography>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {moment(playlist?.items[0].added_at).fromNow()}
              </Typography>
              <Typography fontWeight={200} variant="h5" gutterBottom>
                {playlist?.items[0].track.name}
              </Typography>
              <div
                style={{
                  justifyContent: "start",
                  display: "flex",
                  marginBottom: "2.5rem",
                  marginTop: "2.5rem",
                }}
              >
                {user ? (
                  <Button
                    onClick={() => {
                      toggle();
                      setMenuStatus(expression);
                      playSong(playlist?.items[0].track.id);
                    }}
                  >
                    <UnstyledButtonCustom />
                  </Button>
                ) : (
                  <Button onClick={() => setConfirmOpen(true)}>
                    <UnstyledButtonCustom />
                  </Button>
                )}
                <ConfirmDialog
                  title="Login to Spotify?"
                  children="With Spotify Premium, you will be able to access full length podcasts in the app. Without a premium account, you can check us you can access a preview here, or check us out on Youtube"
                  button1="I don't have a Spotify Account"
                  button2="Login with Spotify Premium"
                  open={confirmOpen}
                  setOpen={setConfirmOpen}
                  onConfirm={() => {
                    handleClick();
                  }}
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            justifyContent="start"
            display="flex"
          >
            <img
              className="recent-episode-image"
              src={playlist?.items[0].track.album.images[0].url}
              alt="cannot be viewed at this time"
            />
          </Grid>
        </Grid>
      </div>
      {/* ))} */}
    </div>
  );
}
