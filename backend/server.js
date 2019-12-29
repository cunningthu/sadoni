/*  

*/

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose database connection established successfully");
});

const usersRouter = require("./routes/users");
// const foodsRouter = require("./routes/foods");
// const listsRouter = require("./routes/lists");

app.use("/users", usersRouter);
// app.use("/foods", foodsRouter);
// app.use("/lists", listsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});