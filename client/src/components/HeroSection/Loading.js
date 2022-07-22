import { Typography } from "@mui/material";
import React from "react";
import takeover from "../../images/TAKEOVER LOGO.png";
import { Avatar } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="loading-container" style={{ color: "#D31027" }}>
      {/* <div className="loading">
        <div></div>
        <Avatar
          src={takeover}
          sx={{
            height: "100px",
            width: "100px",
            display: "flex",
            border: "5px solid",
            borderColor: "#fff",
          }}
        />
      </div> */}
      <CircularProgress color="inherit" size={50} />
    </div>
  );
};

export default Loading;
