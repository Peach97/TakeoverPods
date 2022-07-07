import { Typography } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div className="loading-container">
      <Typography variant="h3" color="white">
        Takeover Pods
      </Typography>
      <Typography variant="h4" color="white">
        Sports Network
      </Typography>

      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
