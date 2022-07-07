import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const AwesomeBox = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "30rem",
        height: "30rem",
        backgroundColor: "#1a1a1a",
        borderRadius: "36px",
        color: "#fff",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontSize: "3rem", fontWeight: 700 }}
      >
        {props.title}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        position={"relative"}
        sx={{ fontSize: "1.5rem", fontWeight: 100 }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

export default AwesomeBox;
