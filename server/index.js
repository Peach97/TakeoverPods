import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
// import userRouter from "./routes/user.js";

const app = express();
dotenv.config();
//dotenv package not required for local env file

app.use(express.json({ limit: "30mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());
app.use("/posts", postRoutes);
// app.use("/user", userRouter);

// const CONNECTION_URL =
//   "mongodb+srv://Peach97:gjAZvUQL3KV55yAn@cluster0.dx7oulm.mongodb.net/TakeoverPods?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`db has connected on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
