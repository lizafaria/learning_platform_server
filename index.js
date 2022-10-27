const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;


const books = require('./data.json');


app.get("/", (req, res) => {
  res.send("this is running on server");
});


