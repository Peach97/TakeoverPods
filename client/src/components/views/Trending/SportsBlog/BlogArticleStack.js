import { Box } from "@mui/system";
import React from "react";
import { Divider, Stack } from "@mui/material";
import BlogArticleSnippet from "./BlogArticleSnippet";
import episode from "../../../../images/michigan-stadium.jpg";

const BlogArticleStack = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack spacing={0}>
        <Divider sx={{ width: "90%", alignSelf: "center" }} />
        <BlogArticleSnippet
          image={episode}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Divider sx={{ width: "90%", alignSelf: "center" }} />

        <BlogArticleSnippet
          image={episode}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Divider sx={{ width: "90%", alignSelf: "center" }} />

        <BlogArticleSnippet
          image={episode}
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Stack>
    </Box>
  );
};

export default BlogArticleStack;
