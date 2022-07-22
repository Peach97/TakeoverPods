import React from "react";
import "./Platforms.css";
import gradient from "../../../images/mesh (27).png";
import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import SocialCard from "./SocialCard";
import { Link } from "react-router-dom";
import { CustomButton } from "../Seasons/Seasons";

export const logos = [
  {
    image: "youtube_img",
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCXd9541vxjUHIF8kV-FsCZQ",
  },
  {
    image: "spotify_img",
    label: "Spotify",
    href: "https://open.spotify.com/playlist/5yR4WrjiekKXCANhCmdnRW",
  },
  {
    image: "facebook_img",
    label: "Facebook Video",
    href: "https://www.facebook.com/takeoverpods/",
  },
  {
    image: "applepodcasts_img",
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/sec-takeover-pod/id1607390973",
  },
];

const Platforms = () => {
  return (
    <Box sx={{ bgcolor: "background.default" }} className="platforms-container">
      <h1 id="platforms">Platforms</h1>
      <img className="background-gradient" src={gradient} alt="" />
      <Box
        style={{
          width: "100%",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box className="text-container">
          <Typography gutterBottom variant="h4" color="text.primary">
            Listen on the Site
          </Typography>
          <Typography lineHeight={2} variant="body1" color="text.secondary">
            Login to Spotify to check out all episodes in-house. Right here.
            Right now. New episodes will be uploaded regularly for your
            listening pleasure.
          </Typography>
          <CustomButton
            sx={{
              borderRadius: "36px",
              margin: "2.5rem 0 0 0",
              textTransform: "none",
            }}
            component={Link}
            to="/archive"
          >
            Episode Archive
          </CustomButton>
        </Box>
      </Box>

      <Box className="grid-container">
        <Divider
          primary="Steaming Platforms"
          sx={{
            zIndex: 4,
            fontWeight: 500,
            fontSize: "1.5rem",
          }}
        >
          <Typography color="text.secondary">or</Typography>
        </Divider>
        <Grid
          mt="5rem"
          direction="row"
          display="flex"
          justifyContent="center"
          alignItems="center"
          container
          md={12}
          sm={12}
          xs={12}
        >
          {logos.map((logo, index) => (
            <Grid item md={6} sm={6} xs={12} key={index}>
              <List mx="auto">
                <ListItem>
                  <SocialCard
                    href={logo.href}
                    component={Card}
                    image={require("../../../images/" + logo.image + ".png")}
                    label={logo.label}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Platforms;
