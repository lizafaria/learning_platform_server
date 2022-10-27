const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const Port = process.env.Port || 5000;


const books = require('./data.json');


app.get("/", (req, res) => {
  res.send("this is running on server");
});

app.get('/books', (req, res) =>{
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = books.find(f => f._id === id);
    res.send(selectedNews);
});

app.get('/checked', (req, res) =>{
    res.send(books);
});

app.get('/checked/:id', (req, res)=>{
    const id = req.params.id;
    const selectedNews = books.find(f => f._id === id);
    res.send(selectedNews);
})

app.listen(Port, () => {
    console.log("first", Port);
  });
  
  module.exports=app;
  

