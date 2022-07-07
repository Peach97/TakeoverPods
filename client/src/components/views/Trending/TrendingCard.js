import React from "react";
import { Card, CardMedia, Typography, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

function TrendingCard(props) {
  return (
    <Card
      component="div"
      sx={{
        display: "flex",
        maxHeight: "100rem",
        bgcolor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Grid container justifyContent="center" display="flex">
        <Grid item md={6} sm={12} xs={12}>
          <Box padding="1rem">
            <CardMedia
              height={400}
              width={400}
              component="img"
              image={props.image}
              alt=""
            />
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", alignItems: "center" }}>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
                fontWeight={100}
                gutterBottom
              >
                {props.date}
              </Typography>
              <Typography
                className="description-text"
                gutterBottom
                component="div"
                variant="h4"
                fontWeight={600}
                color="text.primary"
              >
                {props.title}
              </Typography>

              <Typography
                className="description-text"
                gutterBottom
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                {props.description}
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default TrendingCard;
