import { Grid, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../Navbar/Navbar";
import { ThemeProvider } from "@mui/system";
import "./Special.css";
import { CustomButton } from "../Seasons/Seasons";

const Special = () => {
  return (
    <div className="special-container">
      <ThemeProvider theme={theme}>
        <Grid container alignItems="center" display="flex" p="5rem">
          <Grid item md={4} sm={10} xs={10}>
            <div>
              <Typography
                variant="body2"
                sx={{ color: "#fff", fontSize: "19px" }}
              >
                Subscribe or leave a comment on Youtube if you like the podcast.
              </Typography>
            </div>
            <div>
              <CustomButton
                sx={{
                  borderRadius: "36px",
                  fontSize: "1.5rem",
                  marginTop: "2rem",
                  padding: "0 2rem 0 2rem",
                  textTransform: "none",
                }}
              >
                Review
              </CustomButton>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

export default Special;
