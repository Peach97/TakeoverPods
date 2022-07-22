import React from "react";
import { List, ListItem, Button, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import "./Seasons.css";
import AwesomeCards from "../../AwesomeCards/AwesomeCards";
import { Typography } from "@mui/material";
import takeover from "../../../images/TAKEOVER BANNER.jpeg";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useStateValue } from "../../../StateProvider";
import { TryRounded } from "@mui/icons-material";

export const CustomButton = styled(Button)({
  backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  color: "#fff",
  "&:hover": {
    filter: "brightness(110%)",
    color: "#F3FAFF",
  },
});
export default function Seasons({ playSong, setIsMenuOpen }) {
  const [{ playlist }, dispatch] = useStateValue();
  console.log(playlist);
  // const videos = useSelector((state) => state.videos);
  // console.log(videos);
  // videos.sort(({ publishedAt }) => (publishedAt > publishedAt ? 1 : -1));
  const recentThree = playlist.items.slice(0, 3);

  // console.log(recentThree);
  return (
    <Box
      id="seasons"
      sx={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        justifyContent: "center",
        objectFit: "contain",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Box sx={{ maxWidth: "1500px" }}>
        {/* <div className="top-wrapper" /> */}
        <Grid
          zIndex={1}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          pb={5}
          spacing={2}
        >
          <Grid
            item
            md={4}
            sm={6}
            xs={8}
            justifyContent="end"
            alignItems="center"
            display="flex"
          >
            <img
              src={takeover}
              height="100%"
              width="350px"
              display="flex"
              alt="cannot be viewed"
            />{" "}
          </Grid>
          <Grid item md={4} sm={10} xs={10} alignItems="center">
            <Typography
              variant="h2"
              color="text.primary"
              fontWeight={800}
              sx={{
                textShadow: "1.5px 5px 5px #00000095",
                fontWeight: 700,
              }}
            >
              TAKEOVER
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Sports Media that brings the passion fans want and gives the
              insights they need. New episodes available daily and a regularly
              updated blog to keep you in the know.
            </Typography>
          </Grid>
          <Divider sx={{ width: "90%", margin: "5rem 0 5rem 0" }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              item
              md={10}
              sm={10}
              xs={10}
              justifyContent="space-between"
              display="flex"
              alignItems="center"
            >
              <Typography variant="h6" color="text.primary">
                Recent Episodes
              </Typography>
              <CustomButton
                component={Link}
                to="/archive"
                variant="extended"
                sx={{
                  borderRadius: "36px",
                  fontSize: "0.75rem",
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                All Episodes
              </CustomButton>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {recentThree.map((item, index) => (
              <Grid item md={3.5} sm={6} xs={10} sx={{ maxWidth: "1500px" }}>
                <List mx="auto">
                  <ListItem>
                    <AwesomeCards
                      setMenuStatus={setIsMenuOpen}
                      playSong={playSong}
                      item={item.key}
                      aria-label="episodes"
                      image={item.track.album.images[0].url}
                      date={item.added_at}
                      artist={item.track.artists[0].name}
                      title={item.track.name}
                      description={item.description}
                      sx={{
                        flexDirection: "column",
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={10} sm={10} xs={10}>
              <Typography variant="h6" color="text.primary">
                Popular Episodes
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {recentThree.map((item) => (
              <Grid item md={3.5} sm={6} xs={10} sx={{ maxWidth: "1500px" }}>
                <List mx="auto">
                  <ListItem>
                    <AwesomeCards
                      setMenuStatus={setIsMenuOpen}
                      aria-label="episodes"
                      image={item.track.album.images[0].url}
                      date={item.added_at}
                      artist={item.track.artists[0].name}
                      title={item.track.name}
                      description={item.description}
                      sx={{
                        flexDirection: "column",
                      }}
                    />
                  </ListItem>
                </List>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
