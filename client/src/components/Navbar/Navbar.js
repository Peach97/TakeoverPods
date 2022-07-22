import React, { useState } from "react";
import "./Navbar.css";
import {
  AppBar,
  Toolbar,
  Tab,
  Button,
  useMediaQuery,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { createTheme } from "@mui/material/styles";
import spotify from "../../images/stfy.png";
import instagram from "../../images/ig.png";
import youtube from "../../images/yt.png";
import twitter from "../../images/twtr.png";
import podcast from "../../images/ap.png";
import { styled } from "@mui/system";
import { Box } from "@mui/system";
import SocialButtonGroup from "./SocialButtonGroup";
import DropTabs from "../DropTabs/DropTabs";
import { Link } from "react-router-dom";
import takeover from "../../images/TAKEOVER LOGO.png";
import { ModeToggler } from "./ModeToggler";
import SocialsBar from "./SocialsBar";

export const theme = createTheme({
  palette: {
    primary: { main: "#121212" },
    secondary: { main: "#F3FAFF" },
    tertiary: { main: "#70CFFF" },
    background: {
      main: "#121212",
    },
    top: {
      main: "#12121243",
    },
  },
});
//customizing nav btn
export const CustomButton = styled(Button)({
  backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
  borderRadius: "2rem",
  fontSize: "1rem",
  whiteSpace: "nowrap",
  fontWeight: "800",
  color: "#fff",
  marginLeft: "1rem",
  textTransform: "none",
  "&:hover": {
    filter: "brightness(110%)",
    color: "#fff",
  },
});
export const CustomTab = styled(Tab)({
  textTransform: "none",
  whiteSpace: "nowrap",
  width: "fit-content",
  margin: "0",
  fontSize: "1rem",
  padding: "0 1rem 0 1rem",
  fontWeight: "200",
  opacity: "100%",
  "&:hover": {
    borderBottom: "1 px solid ",
    borderColor: "text.primary",
  },
});
//social logos nav
export const logos = [
  {
    image: (
      <img height="100%" src={spotify} alt="cannot be viewed at this time" />
    ),
    route: "https://open.spotify.com/playlist/5yR4WrjiekKXCANhCmdnRW",
  },
  {
    image: (
      <img height="100%" src={instagram} alt="cannot be viewed at this time" />
    ),
    route: "https://www.instagram.com/takeoverpods/",
  },
  {
    image: (
      <img height="100%" src={youtube} alt="cannot be viewed at this time" />
    ),
    route: "https://www.youtube.com/channel/UCXd9541vxjUHIF8kV-FsCZQ",
  },
  {
    image: (
      <img height="100%" src={twitter} alt="cannot be viewed at this time" />
    ),
    route: "https://mobile.twitter.com/takeoverpods",
  },
  {
    image: (
      <img height="100%" src={podcast} alt="cannot be viewed at this time" />
    ),
    route:
      "https://podcasts.apple.com/us/podcast/sec-takeover-pod/id1607390973",
  },
];
//nav tab labels and routes
const Navbar = ({ setToggleDark }) => {
  //media query
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  console.log(matches);
  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <React.Fragment>
      <AppBar
        className={color ? "navbar" : "notnavbar"}
        color={color ? "background" : "transparent"}
        position="fixed"
        sx={{
          marginBottom: "1px",
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
      >
        <div
          className={color ? "appbar-shadow-none" : "appbar-shadow"}
          style={{ zIndex: -100 }}
        >
          <Toolbar>
            {matches ? (
              <>
                <Box
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    zIndex: "998",
                  }}
                >
                  <Box
                    sx={{
                      width: "fit-content",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <DrawerComp
                      color={color}
                      setColor={setColor}
                      changeColor={changeColor}
                      setToggleDark={setToggleDark}
                    />

                    <Typography
                      variant="h5"
                      display="flex"
                      fontWeight={800}
                      color={color ? "text.primary" : "white"}
                      sx={{
                        textDecoration: "none",
                        zIndex: (theme) => theme.zIndex.drawer - 1,
                      }}
                      component={Link}
                      to="/"
                      textTransform="none"
                    >
                      <Avatar
                        sx={{
                          border: "1px solid",
                          borderColor: "text.primary",
                        }}
                        src={takeover}
                        alt=""
                      />
                    </Typography>
                  </Box>
                  <Box alignItems="center" display="flex">
                    {/* <ModeToggler
                    color={color}
                    setColor={setColor}
                    changeColor={changeColor}
                    setToggleDark={setToggleDark}
                  /> */}
                    <CustomButton
                      href="https://www.youtube.com/channel/UCXd9541vxjUHIF8kV-FsCZQ/featured"
                      target="_blank"
                      sx={{
                        borderRadius: "18px",
                        fontSize: "0.8rem",
                        whiteSpace: "nowrap",
                        fontWeight: "800",
                      }}
                      variant="contained"
                    >
                      Subscribe
                    </CustomButton>
                  </Box>
                </Box>
              </>
            ) : (
              <>
                <Box
                  sx={{
                    width: "100%",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h5"
                    color={color ? "text.primary" : "white"}
                    position="fixed"
                    top="1.5rem"
                    component={Link}
                    sx={{ textDecoration: "none" }}
                    to="/"
                    zIndex={999}
                    textTransform="none"
                    fontWeight={800}
                  >
                    <Avatar
                      sx={{ border: "1px solid", borderColor: "text.primary" }}
                      src={takeover}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                    component="div"
                    color={color ? "text.primary" : "white"}
                  >
                    <DropTabs />
                  </Typography>
                </Box>
                <ModeToggler
                  color={color}
                  setColor={setColor}
                  changeColor={changeColor}
                  setToggleDark={setToggleDark}
                />
                <Typography
                  component="div"
                  color={color ? "text.primary" : "white"}
                  style={{
                    width: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    position: "fixed",
                    top: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  <SocialButtonGroup />
                </Typography>
              </>
            )}
          </Toolbar>
          <SocialsBar />
        </div>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
