import React from "react";
import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";

const SocialCard = (props) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "100%",
          height: "5rem",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            width="100%"
            height="36px"
            image={props.image}
            alt=""
            sx={{ flexDirection: "column", padding: "1rem 1rem 1rem 1rem" }}
          />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="h5">{props.label}</Typography>
        </Box>
      </Card>
    </>
  );
};

export default SocialCard;
