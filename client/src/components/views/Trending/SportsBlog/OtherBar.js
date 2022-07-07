import React from "react";
import { Box, Divider } from "@mui/material";
import { Grid } from "@mui/material";
import BlogLatest from "./BlogLatest";
import { Typography } from "@mui/material";
import { createSelectorHook, useSelector } from "react-redux";

const OtherBar = ({ openForm, currentId, setCurrentId, setOpenForm }) => {
  const posts = useSelector((state) => state.posts);
  const correctPosts = posts.filter(
    ({ author }) => author === "Chris Lavallee"
  );
  correctPosts.slice(0, 4);
  console.log(correctPosts);
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        height: "fit-content",
        display: "flex",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "90%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Divider flexItem>
          <Typography variant="body1" color="text.secondary">
            Other Topics
          </Typography>
        </Divider>
        <Grid
          justifyContent="space-evenly"
          container
          display="flex"
          height="fit-content"
          flexDirection="row"
        >
          {correctPosts.map((post) => (
            <Grid item md={3} sm={12} xs={12} key={post._id}>
              <BlogLatest
                openForm={openForm}
                setOpenForm={setOpenForm}
                setCurrentId={setCurrentId}
                post={post}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OtherBar;
