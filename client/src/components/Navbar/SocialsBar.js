import react from "react";
import { Box } from "@mui/system";
import { logos } from "./Navbar";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";

import React from "react";

const SocialsBar = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "fit-content",
        width: "100%",
        display: "flex",
        backgroundImage: `linear-gradient(to right, #D31027 0%, #EA384D  51%, #D31027  100%)`,
        alignItems: "center",
        justifyContent: "end",
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 3,
        fontWeight: 500,
        fontSize: "1rem",
        borderTop: "1px solid",
      }}
    >
      <Typography sx={{ padding: "0 1rem 0 0" }}>Follow Us</Typography>
      {logos.map((logo) => (
        <IconButton
          size="small"
          sx={{ margin: "0 1rem 0 1rem" }}
          href={logo.route}
          target="_blank"
        >
          {logo.image}
        </IconButton>
      ))}
    </Box>
  );
};
export default SocialsBar;
