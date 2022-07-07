import React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { IconButton } from "@mui/material";
import BasicMenu from "./MenuButton";
import { CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { theme } from "./Navbar";
import { ThemeProvider } from "@mui/system";

const LatestCard = (props) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Card sx={props.sx}>
          <Grid container md={12} sm={12} xs={12}>
            <Grid item md={6} sm={6} xs={12}>
              <CardMedia
                component="img"
                sx={props.filter}
                image={props.image}
                // alt="cannot be viewed at this time"
              />
            </Grid>
            <Grid item md={6} sm={6} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={props.content}>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ fontSize: "1.5rem", color: "#293241" }}
                  >
                    {props.subtitle}
                  </Typography>
                  <Typography
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "2.75rem",
                      fontWeight: 700,
                      color: "#E0FBFC",
                    }}
                  >
                    {props.title}
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "1.75rem",
                      fontWeight: 200,
                      color: "#E0FBFC",
                    }}
                  >
                    {props.details}
                  </Typography>
                  <Box sx={props.display}>
                    <IconButton aria-label="listen">
                      <PlayCircleOutlineIcon sx={{ color: "#000000" }} />{" "}
                      <Typography pl={1} fontSize={"1.5rem"} color="#000000">
                        Listen
                      </Typography>
                    </IconButton>
                    <IconButton aria-label="dropdown">
                      <BasicMenu />
                    </IconButton>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </ThemeProvider>
    </div>
  );
};

export default LatestCard;
