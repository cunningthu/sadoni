//  Connect to MongoDB: nodemon start

/* Stripe payment */

const path = require('path');
const bodyParser = require('body-parser');
const postCharge = require('./stripe');

/* Express, cors, mongoose */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

router.post('./stripe/charge', postCharge);
router.all('*', (_, res) => 
  res.json({message: 'please make a POST request to /stripe/charge'})
);
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Control-Type, Accept'
  )
  next()
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../mern-sadoni')));

app.get('*', (_, res) =>
  res.sendFile(path.join(__dirname, '../mern-sadoni/index.html'))
);

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

const usersRouter = require("../routes/users");
// const foodsRouter = require("./routes/foods");
// const listsRouter = require("./routes/lists");

app.use("/users", usersRouter);
// app.use("/foods", foodsRouter);
// app.use("/lists", listsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
