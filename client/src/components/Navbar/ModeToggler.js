import React, { useState } from "react";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
export const ModeToggler = ({ setToggleDark }) => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [name, setName] = useState("");
  const handleModeChange = (event) => {
    setName(event.target.value);
    setToggleDark(event.target.value);
  };
  return (
    <ThemeProvider theme={color ? "" : theme}>
      <div>
        <FormControl
          sx={{
            minWidth: "7.5rem",
            position: "fixed",
            margin: 1,
            top: "1rem",
            right: "22.5%",

            zIndex: (theme) => theme.zIndex.drawer + 2,
          }}
          size="small"
        >
          <Select value={name} displayEmpty onChange={handleModeChange}>
            <MenuItem value="">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Brightness4Icon fontSize="small" />{" "}
                <Typography pl={1}>OS Default</Typography>
              </div>
            </MenuItem>
            <MenuItem value={false} key="light">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LightModeIcon fontSize="small" />{" "}
                <Typography pl={1}>Light</Typography>
              </div>
            </MenuItem>
            <MenuItem value={true} key="dark">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DarkModeIcon fontSize="small" />{" "}
                <Typography pl={1}>Dark</Typography>
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </ThemeProvider>
  );
};
