import express from "express";
import mongoose from "mongoose";

import { bookRoute } from "./routes/book.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/books", bookRoute);
app.get("/", (req, res) => {
  res.send("Hello API SERVER");
});

mongoose
  .connect(
    "mongodb+srv://adityamalikm67:Hx3CYvsZtkM0S8nD@cluster0.lhjpd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
