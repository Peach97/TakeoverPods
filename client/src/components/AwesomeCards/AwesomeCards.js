import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import BasicMenu from "./MenuButton";
import "./AwesomeCards.css";
import { StyledButton } from "./MenuButton";
import moment from "moment";

let expression = true;

function toggle() {
  expression = !expression;
}
export default function AwesomeCards(props) {
  return (
    <div>
      <Card
        className="latest-episode-card"
        sx={{
          bgcolor: "background.default",
          borderRadius: "36px",
          minHeight: "32.5rem",
          minWidth: "25rem",
        }}
      >
        <CardMedia
          component="img"
          height={300}
          minWidth={300}
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
            sx={{ fontSize: "1.5rem", fontWeight: 600 }}
          >
            {props.artist}
          </Typography>
          <Typography
            color="text.secondary"
            pt={1}
            sx={{ fontSize: "1rem", fontWeight: 400 }}
            className="description-text"
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
              position: "absolute",
              bottom: "0",
              pb: "2.5rem",
              width: "90%",
            }}
          >
            <Button
              onClick={() => {
                toggle();
                props.setMenuStatus(expression);
                props.playSong(props.item);
              }}
              aria-label="listen"
            >
              <PlayCircleOutlineIcon sx={{ color: "text.secondary" }} />{" "}
              <Typography color="text.secondary" pl={1} fontSize={"1rem"}>
                Listen
              </Typography>
            </Button>
            <StyledButton disableRipple aria-label="dropdown">
              <BasicMenu />
            </StyledButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
