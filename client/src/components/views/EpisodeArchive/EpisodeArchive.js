import React from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  Paper,
  AppBar,
  Button,
  TextField,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import AwesomeCards from "../../AwesomeCards/AwesomeCards";
import "./EpisodeArchive.css";
import gradient from "../../../images/mesh (27).png";
import { useSelector } from "react-redux";
import Pagination from "../../../Pagination/Pagination";
import { useStateValue } from "../../../StateProvider";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const navigate = useNavigate;
const EpisodeArchive = ({ page, setPage }) => {
  const [{ playlist }, dispatch] = useStateValue();
  const archive = playlist.items;
  //handle change
  // const handleChange = (page) => {
  //   setPage(page);
  //   window.scroll(0, 0);
  // };
  // const query = useQuery();
  // const videos = useSelector((state) => state.videos);
  // console.log(videos);
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
      }}
    >
      <img className="background-gradient" src={gradient} alt="" />
      <h1 id="platforms">Episode Archive</h1>
      <Box sx={{ maxWidth: "1500px" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt="20rem"
        >
          {archive.map((item) => (
            <Grid item md={3} sm={6} xs={10}>
              <List mx="auto">
                <ListItem>
                  <AwesomeCards
                    aria-label="episodes"
                    image={item.track.album.images[0].url}
                    date={item.added_at}
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
              {/* <Pagination
                setPage={setPage}
                page={page}
                handleChange={handleChange}
              /> */}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EpisodeArchive;
