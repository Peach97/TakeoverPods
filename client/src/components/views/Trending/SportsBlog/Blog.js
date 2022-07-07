import { Box } from "@mui/system";
import React from "react";
import BlogLatest from "./BlogLatest";
import BlogArticleStack from "./BlogArticleStack";
import { Grid, Stack } from "@mui/material";
import "./Blog.css";
import BlogArticleSnippet from "./BlogArticleSnippet";

const Blog = ({ posts, openForm, setOpenForm, setCurrentId }) => {
  const recentThree = posts.slice(0, 3);
  console.log(recentThree);

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",

        justifyContent: "center",
        display: "flex",
      }}
    >
      <Grid container>
        <Grid item md={8} sm={12} xs={12}>
          {posts
            .filter((post) => post === posts[posts.length - 1])
            .map((post) => (
              <BlogLatest
                openForm={openForm}
                setOpenForm={setOpenForm}
                setCurrentId={setCurrentId}
                post={post}
              />
            ))}
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Stack>
            {recentThree.map((post) => (
              <BlogArticleSnippet
                key={post._id}
                openForm={openForm}
                setOpenForm={setOpenForm}
                setCurrentId={setCurrentId}
                post={post}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
