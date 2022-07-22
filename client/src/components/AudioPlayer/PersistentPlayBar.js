import React, { useState, useEffect } from "react";
import "./PersistentPlayBar.css";
import AudioPlayer from "./AudioPlayer";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";

export default function PersistentPlayBar({ isOpen, setMenuStatus, spotify }) {
  const [minimized, setMinimized] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  //minimize or maximize the player
  return (
    <Typography
      sx={{
        bgcolor: "background.default",
        backdropFilter: `blur(20px)`,
      }}
      component="div"
      id="playbar"
      className={isOpen ? "open" : ""}
    >
      <AudioPlayer spotify={spotify} />

      <IconButton
        id="player-control-btns"
        disableRipple
        sx={{ height: 0, width: 0, marginRight: "0.5rem" }}
      >
        <KeyboardArrowDownIcon
          onClick={() => {
            setMenuStatus(true);
            setIsMinimized(true);
            setMinimized(false);
          }}
          sx={{
            p: "0.2rem",
            fontSize: "1.5rem",
            m: "auto",
          }}
        />

        <KeyboardArrowUpIcon
          id="maximize-btn"
          className={minimized ? "" : "show"}
          onClick={() => {
            setMenuStatus(false);
            setIsMinimized(false);
            setMinimized(true);
          }}
          sx={{
            p: "0.5rem 0.25rem 1rem 0.25rem",
            backdropFilter: `blur(20px)`,
            backgroundColor: "#D31027",
            color: "#fff",
            m: "auto",
            mr: "1rem",
            fontSize: "1.5rem",
            zIndex: 999,
            border: "1px solid #fff",
          }}
        />
      </IconButton>
    </Typography>
  );
}
