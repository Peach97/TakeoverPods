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

function smoothScroll() {
  document.querySelector("#hero-container").scrollIntoView({
    behavior: "smooth",
    offsetTop: "5rem",
  });
}

const DrawerComp = () => {
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
  const [isOpen, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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
          width="50vw"
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
              {/* {openSecond ? (
                <ExpandLess color="text.secondary" />
              ) : (
                <ExpandMore color="text.secondary" />
              )} */}
            </ListItemButton>
            <Collapse in={openSecond} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubEpisodes.map((episode, index) => (
                  <ListItemButton key={index}>
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
              {/* {openThird ? (
                <ExpandLess color="text.secondary" />
              ) : (
                <ExpandMore color="text.secondary" />
              )} */}
            </ListItemButton>
            <Collapse in={openThird} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubAbout.map((about, index) => (
                  <ListItemButton key={index} sx={{ pl: "4" }}>
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
                primary="Network"
                primaryTypographyProps={{ color: "text.secondary" }}
              />
              {/* {openFourth ? (
                <ExpandLess color="text.secondary" />
              ) : (
                <ExpandMore color="text.secondary" />
              )} */}
            </ListItemButton>
            <Collapse in={openFourth} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {SubNetwork.map((network, index) => (
                  <ListItemButton key={index} sx={{ pl: "4" }}>
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
              sx={{
                bgcolor: "text.primary",
                color: "background.default",
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
