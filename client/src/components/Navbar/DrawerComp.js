import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
  Collapse,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Slant as Hamburger } from "hamburger-react";
import { SubAbout } from "../DropTabs/DropTabs";
import { SubEpisodes } from "../DropTabs/DropTabs";
import { SubNetwork } from "../DropTabs/DropTabs";
import { CustomButton } from "./Navbar";
import StyledLink from "../StyledLink.js";

function smoothScroll() {
  document.querySelector("#hero-container").scrollIntoView({
    behavior: "smooth",
    offsetTop: "5rem",
  });
}
//smooth scroll function for scrolling to top
const DrawerComp = ({ setToggleDark, setColor, color, changeColor }) => {
  const [openThird, setOpenThird] = useState(true);
  const [openFourth, setOpenFourth] = useState(true);
  const [openSecond, setOpenSecond] = useState(true);
  const handleClick = () => {
    setOpenSecond(!openSecond);
  };
  const handleThirdClick = () => {
    setOpenThird(!openThird);
  };
  const handleFourthClick = () => {
    setOpenFourth(!openFourth);
  };
  //hamburger animation
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
          setOpen(false);
        }}
      >
        <Box
          p={2}
          width="100vw"
          height="100vh"
          justifyContent="start"
          display="flex"
          alignItems="center"
          role="presentation"
          sx={{ bgcolor: "background.default" }}
        >
          <List
            sx={{
              display: "flex",
              textAlign: "left",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <ListItemButton
              component={Link}
              to="/"
              onClick={() => {
                setOpenDrawer(false);
                setOpen(false);
              }}
              sx={{
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
              }}
            >
              <ListItemIcon>
                <HomeIcon
                  color="text.primary"
                  onClick={() => smoothScroll()}
                  sx={{ fontSize: "2rem" }}
                />
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
              <ListItemText
                primary="Episodes"
                primaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItemButton>
            <Collapse in={openSecond} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubEpisodes.map((episode, index) => (
                  <ListItemButton
                    onClick={() => {
                      setOpenDrawer(false);
                      setOpen(false);
                    }}
                    component={StyledLink}
                    to={"/" + episode.route}
                    key={index}
                  >
                    <ListItemText
                      color="text.primary"
                      primaryTypographyProps={{
                        color: "text.primary",
                        fontSize: "1.125rem",
                        fontWeight: "600",
                      }}
                      sx={{ textAlign: "left" }}
                      primary={episode.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <ListItemButton onClick={handleThirdClick}>
              <ListItemText
                color="primary"
                primary="About"
                primaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItemButton>
            <Collapse in={openThird} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubAbout.map((about, index) => (
                  <ListItemButton
                    onClick={() => {
                      setOpenDrawer(false);
                      setOpen(false);
                    }}
                    component={StyledLink}
                    to={"/" + about.route}
                    key={index}
                    sx={{ pl: "4" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        color: "text.primary",
                        fontSize: "1.125rem",
                        fontWeight: "600",
                      }}
                      sx={{ textAlign: "left" }}
                      primary={about.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <ListItemButton onClick={handleFourthClick}>
              <ListItemText
                primary="Blog"
                primaryTypographyProps={{ color: "text.secondary" }}
              />
            </ListItemButton>
            <Collapse in={openFourth} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubNetwork.map((network, index) => (
                  <ListItemButton
                    onClick={() => {
                      setOpenDrawer(false);
                      setOpen(false);
                    }}
                    component={StyledLink}
                    to={"/" + network.route}
                    key={index}
                    sx={{ pl: "4" }}
                  >
                    <ListItemText
                      primaryTypographyProps={{
                        color: "text.primary",
                        fontSize: "1.125rem",
                        fontWeight: "600",
                      }}
                      sx={{ textAlign: "left" }}
                      primary={network.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
            <CustomButton
              href="https://www.youtube.com/channel/UCXd9541vxjUHIF8kV-FsCZQ/featured"
              target="_blank"
              sx={{
                bgcolor: "text.primary",
                color: "white",
                fontSize: "1.5rem",
                margin: "1rem 0rem 0rem 0rem",
                padding: ".25rem 1rem 0.25rem 1rem",
              }}
            >
              Subscribe
            </CustomButton>
          </List>
        </Box>
      </Drawer>
      <IconButton
        disableRipple
        sx={{
          marginRight: "auto",
          padding: "0",
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Hamburger
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          duration={0.6}
          rounded
        />
      </IconButton>
    </>
  );
};

export default DrawerComp;
