//import express
const express = require("express");
const app = express();

//alternative way of doing it
// const app = require("express")();
app.use(express.json());
//.get takes edpoint and callback function
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my server. This is not my first route ever",
  });
});

app.get("/about", (req, res) => {
    res.send({
      port: 8080,
      dateOfCreation: "08/02/2022",
      version: "4.17.2",
    });
  });

app.post("/", (req, res) => {
  res.send(req.body);
});

app.post("/opinion", (req, res) => {
  const body = req.body;
  if (body.message.includes("hello")) {
    res.send({
      message: "You said hello, I like you",
    });
  } else {
    res.send({
      message: "You did not say hello, I do not like you",
    });
  }
});

app.listen(8080);
