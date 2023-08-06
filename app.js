import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://rushabhpawar820:pmihaRJiUxnBfXTQ@cluster0.eeqpanv.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(app.listen(3000))
  .then(() => console.log("Connected to database and listening to port 3000"))
  .catch((err) => console.log(err));
// app.use("/api", (req, res, next) => {
//   res.send("Hello World!");
// });

//MongoDB database Username: rushabhpawar820 Password: pmihaRJiUxnBfXTQ
