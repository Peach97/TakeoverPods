import React from "react";
import "./DropTabs.css";
import { CustomTab } from "../Navbar/Navbar";
import { Box } from "@mui/system";
import { useState } from "react";
import { Button, List } from "@mui/material";
import { Collapse } from "@mui/material";
import { BorderColor, ExpandLess, ExpandMore } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import StyledLink from "../StyledLink";
import { ScrollTo } from "../ScrollTo";

export const SubEpisodes = [
  { label: "Episode Archive", route: "archive" },
  { label: "Popular" },
];
export const SubAbout = [
  { label: "About the Pod", route: "about" },
  { label: "Contact", route: "contact" },
];
export const SubNetwork = [
  { label: "Takeover Blog", route: "trending" },
  { label: "Sponsors" },
];
const DropTabs = () => {
  //active nav underline effect values

  const [open, setOpen] = useState(false);
  const [openSecondLevel, setOpenSecondLevel] = useState(false);
  const [openThirdLevel, setOpenThirdLevel] = useState(false);
  const handleEnter = () => {
    setOpen(true);
  };
  const handleLeave = () => {
    setOpen(false);
  };
  const handleLeaveSecondLevel = () => {
    setOpenSecondLevel(false);
  };

  const handleEnterThird = () => {
    setOpenThirdLevel(true);
  };
  const handleLeaveThirdLevel = () => {
    setOpenThirdLevel(false);
  };

  const handleClickSecondLevel = () => {
    setOpenSecondLevel(true);
  };
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <List
        component="nav"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div className="tab-dropdown-container">
          <CustomTab
            component={StyledLink}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            to="/"
            label="Episodes"
            icon={<ArrowDropDownIcon />}
            iconPosition="end"
          >
            {open ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </CustomTab>

          <Collapse in={open} timeout={0} className="collapse">
            <List component="div" disablePadding>
              {SubEpisodes.map((episode, index) => (
                <CustomTab
                  key={index}
                  label={episode.label}
                  component={StyledLink}
                  to={"/" + episode.route}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                />
              ))}
            </List>
          </Collapse>
        </div>
        <div className="tab-dropdown-container">
          <CustomTab
            component={StyledLink}
            onMouseEnter={handleClickSecondLevel}
            onMouseLeave={handleLeaveSecondLevel}
            to="/"
            label="About"
            icon={<ArrowDropDownIcon />}
            iconPosition="end"
          >
            {openSecondLevel ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </CustomTab>

          <Collapse in={openSecondLevel} timeout={0} className="collapse">
            <List component="div" disablePadding>
              {SubAbout.map((about, index) => (
                <CustomTab
                  component={StyledLink}
                  to={"/" + about.route}
                  key={index}
                  label={about.label}
                  onMouseEnter={handleClickSecondLevel}
                  onMouseLeave={handleLeaveSecondLevel}
                />
              ))}
            </List>
          </Collapse>
        </div>
        <div className="tab-dropdown-container">
          <CustomTab
            component={StyledLink}
            onMouseEnter={handleEnterThird}
            onMouseLeave={handleLeaveThirdLevel}
            to="/trending"
            label="Blog"
            icon={<ArrowDropDownIcon />}
            iconPosition="end"
          >
            {openSecondLevel ? (
              <ExpandLess fontSize="small" />
            ) : (
              <ExpandMore fontSize="small" />
            )}
          </CustomTab>
          <Collapse in={openThirdLevel} timeout={0} className="collapse">
            <List component="div" disablePadding>
              {SubNetwork.map((network, index) => (
                <CustomTab
                  component={StyledLink}
                  to={"/" + network.route}
                  key={index}
                  label={network.label}
                  onMouseEnter={handleEnterThird}
                  onMouseLeave={handleLeaveThirdLevel}
                />
              ))}
            </List>
          </Collapse>
        </div>
      </List>
    </Box>
  );
};

export default DropTabs;
