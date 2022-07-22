import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  AppBar,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AwesomeCards from "../../AwesomeCards/AwesomeCards";
import "./EpisodeArchive.css";
import gradient from "../../../images/mesh (27).png";
import { useSelector } from "react-redux";
import Paginate from "./Pagination/Pagination";
import usePagination from "./Pagination/usePagination";
import { useStateValue } from "../../../StateProvider";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const navigate = useNavigate;

const EpisodeArchive = () => {
  let [page, setPage] = useState(1);
  const per_page = 9;
  const [{ playlist }] = useStateValue();
  const data = playlist.items;
  const _data = usePagination(data, per_page);

  const count = Math.ceil(playlist.items.length / per_page);

  const handleChange = (e, p) => {
    setPage(p);
    _data.jump(p);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Box
      sx={{
        height: "fit-content",
        width: "100%",
        justifyContent: "center",
        display: "flex",
        bgcolor: "background.default",
        color: "text.primary",
        paddingTop: "10rem",
        objectFit: "contain",
      }}
    >
      {/* <img className="background-gradient" src={gradient} alt="" /> */}
      <Typography
        variant="h3"
        fontWeight={300}
        sx={{ position: "absolute", top: "15rem", zIndex: 2 }}
      >
        Episode Archive
      </Typography>
      <Box sx={{ maxWidth: "1500px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="15rem"
          spacing={2}
        >
          {_data.currentData().map((item, key) => (
            <Grid
              item
              {...{ key }}
              md={3.5}
              sm={6}
              xs={10}
              sx={{ maxWidth: "1500px" }}
            >
              <List mx="auto">
                <ListItem>
                  <AwesomeCards
                    aria-label="episodes"
                    image={item.track.album.images[0].url}
                    date={item.added_at}
                    artist={item.track.artists[0].name}
                    title={item.track.name}
                    description={item.description}
                    sx={{
                      flexDirection: "column",
                    }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
          <Grid
            item
            md={10}
            sm={10}
            xs={10}
            p={7.5}
            justifyContent="center"
            display="flex"
          >
            <Paper sx={{ padding: "0.5rem" }} elevation={1}>
              <Paginate count={count} page={page} handleChange={handleChange} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EpisodeArchive;
