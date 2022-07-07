import { Grid, Typography, Button } from "@mui/material";
import * as React from "react";
import "./HeroSection.css";
import { Box } from "@mui/system";
import UnstyledButtonCustom from "./ButtonCustom";
import { useSelector } from "react-redux";
import { useStateValue } from "../../StateProvider.js";

let expression = true;

export function toggle() {
  expression = !expression;
}

export default function HeroSection({ setMenuStatus, spotify }) {
  const [{ playlist }, dispatch] = useStateValue();

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
              <Typography fontWeight={200} variant="h5" gutterBottom>
                <b>{playlist?.items[0].track.name}</b>
              </Typography>
              <Typography
                className="description-text"
                fontWeight={100}
                variant="body1"
                gutterBottom
              >
                {playlist?.items[0].track.description}
              </Typography>
              <div
                style={{
                  justifyContent: "start",
                  display: "flex",
                  marginBottom: "2.5rem",
                  marginTop: "2.5rem",
                }}
              >
                <Button
                  onClick={() => {
                    toggle();
                    setMenuStatus(expression);
                  }}
                >
                  <UnstyledButtonCustom />
                </Button>
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
