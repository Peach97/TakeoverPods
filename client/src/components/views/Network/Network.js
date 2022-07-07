import React from "react";
import "./Network.css";
import { Box } from "@mui/system";
import mic from "../../../images/mic-background.png";
import { Avatar, Card, CardContent, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material";
import mlb from "../../../images/mlb.png";
import cbb from "../../../images/cbb.png";
import big12 from "../../../images/big12.png";
import draft from "../../../images/draftpod.png";
import network from "../../../images/network.png";
import SocialCard from "../Platforms/SocialCard";
import { logos } from "../Platforms/Platforms";

const StyledAvatar = styled(Avatar)`
  height: 7.5rem;
  width: 7.5rem;
  border: 1px solid #fff;
  position: absolute;
  &:hover {
    border: 3px solid #fff;
  }
`;
const Network = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "150vh",
        width: "100%",
        display: "flex",
        objectFit: "contain",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img className="mic-background" src={mic} alt="" />

      <Typography
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
        component="div"
        variant="h2"
        id="platforms"
      >
        Takeover Sports Network
      </Typography>

      <Box
        id="takeover-spin-circle"
        component="div"
        sx={{
          justifyContent: "center",
          position: "relative",
          display: "flex",
          width: "50rem",
          height: "50rem",
          borderRadius: "50%",
          backdropFilter: `blur(20px)`,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          alignItems: "center",
        }}
      >
        <StyledAvatar id="avatars" src={mlb} sx={{ top: 0 }}></StyledAvatar>
        <StyledAvatar id="avatars" src={cbb} sx={{ left: 0 }}></StyledAvatar>
        <StyledAvatar id="avatars" src={big12} sx={{ right: 0 }}></StyledAvatar>
        <StyledAvatar
          id="avatars"
          src={draft}
          sx={{ bottom: 0 }}
        ></StyledAvatar>
        <StyledAvatar
          id="avatars"
          src={network}
          sx={{ height: "10rem", width: "10rem" }}
        ></StyledAvatar>
        {/* <StyledAvatar
          id="avatars"
          src={network}
          sx={{ position: "relative" }}
        ></StyledAvatar>
        <StyledAvatar></StyledAvatar>
        <StyledAvatar></StyledAvatar> */}
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "40rem",
          justifyContent: "center",
          display: "flex",
          margin: "5rem 0 0 0",
        }}
      >
        <Card
          sx={{
            width: "90%",
            height: "40rem",
            borderRadius: "36px",
            backdropFilter: `blur(20px)`,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            border: "1px solid #fff",
            alignItems: "center",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              width: "60%",
              padding: "2rem",
              alignItems: "center",
              display: "flex",
              height: "40rem",
            }}
          >
            <CardContent>
              <Typography variant="h2">Takeover Sports Network</Typography>
              <Typography
                lineHeight={3}
                variant="subtitle1"
                color="text.primary"
                fontWeight={100}
                maxWidth="75%"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </Typography>
              <Typography></Typography>
            </CardContent>
          </Box>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "fit-content",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2}>
              {logos.map((logo, index) => (
                <SocialCard
                  sx={{ borderRadius: "36px" }}
                  component={Card}
                  image={require("../../../images/" + logo.image + ".png")}
                  label={logo.label}
                />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Network;
