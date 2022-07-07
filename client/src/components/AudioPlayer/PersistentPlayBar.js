import React, { useState } from "react";
import "./PersistentPlayBar.css";
import AudioPlayer from "./AudioPlayer";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";

export default function PersistentPlayBar({ isOpen, setMenuStatus }) {
  const [minimized, setMinimized] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <Typography
      sx={{
        bgcolor: "text.primary",
        backdropFilter: `blur(20px)`,
      }}
      component="div"
      id="playbar"
      className={isOpen ? "open" : ""}
    >
      <AudioPlayer />
      <IconButton
        disableRipple
        sx={{ height: 0, width: 0, marginRight: "0.5rem" }}
      >
        {minimized ? (
          <KeyboardArrowDownIcon
            onClick={() => {
              setMenuStatus(true);
              setIsMinimized(true);
              setMinimized(false);
            }}
            sx={{
              color: "background.default",
              p: "0.2rem",
              fontSize: "1.5rem",
              m: "auto",
            }}
          />
        ) : (
          <KeyboardArrowUpIcon
            id="maximize-btn"
            className={minimized ? "show" : ""}
            onClick={() => {
              setMenuStatus(false);
              setIsMinimized(false);
              setMinimized(true);
            }}
            sx={{
              color: "background.default",
              p: "0.75rem",
              backdropFilter: `blur(20px)`,
              m: "auto",
              backgroundColor: "text.secondary",
              borderRadius: "8px",
              fontSize: "1.5rem",
              zIndex: 999,
            }}
          />
        )}
      </IconButton>
    </Typography>
  );
}
