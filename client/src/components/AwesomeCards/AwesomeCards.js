import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BasicMenu from "./MenuButton";
import "./AwesomeCards.css";
import { StyledButton } from "./MenuButton";
import moment from "moment";

const AwesomeCards = (props) => {
  return (
    <div>
      <Card
        className="latest-episode-card"
        sx={{
          bgcolor: "background.default",
          borderRadius: "8px",
        }}
      >
        <CardMedia
          component="img"
          height="fit-content"
          width={460}
          image={props.image}
          alt="cannot view at this time"
          sx={props.sx}
        />
        <CardContent>
          <Typography
            color="text.secondary"
            sx={{ fontSize: "1rem", fontWeight: 100 }}
          >
            {moment(props.date).fromNow()}
          </Typography>
          <Typography
            color="text.secondary"
            pt={1}
            sx={{ fontSize: "1.75rem", fontWeight: 800 }}
            className="title-text"
          >
            {props.title}
          </Typography>

          <Typography
            color="text.secondary"
            variant="body1"
            pt={1}
            gutterBottom
            className="description-text"
          >
            {props.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <StyledButton aria-label="listen">
              <PlayCircleOutlineIcon sx={{ color: "text.secondary" }} />{" "}
              <Typography color="text.secondary" pl={1} fontSize={"1rem"}>
                Listen
              </Typography>
            </StyledButton>
            <StyledButton disableRipple aria-label="dropdown">
              <BasicMenu />
            </StyledButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default AwesomeCards;
