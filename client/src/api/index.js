import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });
const SPOTIFY = axios.create({
  baseURL: "http://accounts.spotify.com/authorize",
});
export const fetchPosts = () => API.get("/posts");
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
// export const signIn = (formData) => API.post("/user/signin", formData);
