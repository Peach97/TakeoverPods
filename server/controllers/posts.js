import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";
import dotenv from "dotenv";

dotenv.config();

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();

    console.log(posts);

    res.status(200).json({ data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  const { title, summary, selectedFile, channel, author } = req.body;

  const newPostMessage = new PostMessage({
    title,
    summary,
    selectedFile,
    channel,
    author,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, summary, channel, selectedFile, author } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = {
    title,
    summary,
    channel,
    selectedFile,
    author,
    _id: id,
  };

  await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};

//YOUTUBE API CALLS

// app.get("/search", async (req, res, next) => {
//   try {
//     const searchQuery = req.query.search_query;
//     const url = `${YOUTUBE_API_URL}/search?type=video&part=snippet&maxResults=50&order=viewCount&q=${searchQuery}key=${process.env.API_KEY}`;
//     const response = await axios.get(url);
//     const titles = response.data.items.map((item) => item.snippet.title);
//     res.send(titles);
//   } catch (error) {
//     next(error);
//   }
// });
// app.get("/", (req, res) => {
//   res.send("Hello from our API");
// });

// export const youtubeSearch = async (req, res, next) => {
//   try {
//     const searchQuery = req.query.search_query;

//     const response = await youtube.search.list({
//       part: "snippet",
//       q: `${searchQuery} = TAKEOVERSPORTSNETWORK`,
//       type: "video",
//       maxResults: "8",
//       publishedAfter: "2022-03-25T00:00:00Z",
//       pageToken: "CAgQAA",
//     });
//     const length = response.data.items.length;
//     console.log(length);

//     const titles = response.data.items.map((item) => item.snippet);

//     console.log(titles);
//     res.send({
//       data: titles,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
