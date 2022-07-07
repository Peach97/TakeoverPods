import { Box } from "@mui/system";
import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import SportsTabs from "./SportsBlog/SportsTabs";
import BlogLatest from "./SportsBlog/BlogLatest";
import OtherBar from "./SportsBlog/OtherBar";
import { useSelector } from "react-redux";
import Form from "./Form/Form";
import { Skeleton } from "@mui/material";
import BlogArticleSnippet from "./SportsBlog/BlogArticleSnippet";

const Trending = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const [openForm, setOpenForm] = useState(false);
  posts.sort(({ createdAt }) => (createdAt > createdAt ? 1 : -1));
  console.log(posts);
  const recentThree = posts.slice(0, 3);
  console.log(recentThree);

  return (
    <Box
      sx={{
        height: "fit-content",
        padding: "10rem 0 10rem 0",
        width: "100%",
        display: "flex",
        bgcolor: "background.default",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <img className="background-gradient" src={gradient} alt="" /> */}
      <Typography variant="h4" color="text.primary">
        Takeover Blog
      </Typography>
      <Box
        sx={{
          height: "fit-content",
          width: "90%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "fit-content",
            display: "flex",
            padding: "0 0 0 1rem",
          }}
        >
          <Grid display="flex" container justifyContent="start">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h6" color="text.primary">
                Recent Posts
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          height: "fit-content",
          width: "90%",
          display: "flex",
        }}
      >
        <Grid justifyContent="start" container display="flex">
          {posts
            .filter((post) => post === posts[posts.length - 1])
            .map((post) => (
              <Grid
                height="fit-content"
                item
                md={7}
                sm={12}
                xs={12}
                key={post._id}
              >
                <BlogLatest
                  openForm={openForm}
                  setOpenForm={setOpenForm}
                  setCurrentId={setCurrentId}
                  post={post}
                />
              </Grid>
            ))}
          <Grid
            height="fit-content"
            item
            md={5}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
          >
            <Box>
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
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          padding: "0 0 5rem 0",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <SportsTabs
          openForm={openForm}
          setOpenForm={setOpenForm}
          setCurrentId={setCurrentId}
          posts={posts}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          padding: "2.5rem 0 2.5rem 0",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <OtherBar
          openForm={openForm}
          setOpenForm={setOpenForm}
          setCurrentId={setCurrentId}
        />
      </Box>

      <Form
        setOpenForm={setOpenForm}
        openForm={openForm}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </Box>
  );
};

export default Trending;
