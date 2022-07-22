import express from "express";
import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  getPost,
} from "../controllers/posts.js";

const router = express.Router();
//https:/www.googleleapis.com/youtube/v3/search?key=apiKey&type=video&part=snippet&q=foo
//http://localhost:5000/posts
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPosts);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
