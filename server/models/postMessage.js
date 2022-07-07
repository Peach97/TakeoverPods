import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  author: String,
  title: String,
  summary: String,
  channel: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
