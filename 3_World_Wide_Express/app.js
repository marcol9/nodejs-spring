const express = require("express");
const app = express();

const fetch = require("node-fetch");

//const animalUtils = require("./animals/animalsUtils.js");
//console.log("You like this many animals", animalUtils.calculateFavAnimals());

app.use(express.static("public"));

const animalRouter = require("./routers/animalrouter.js");
app.use(animalRouter);
app.get("/message", (req, res) => {
  res.send("<h1> Hello weather hahah </h1>");
});

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/public/weather.html");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/index.html"); //__dirname absolute path of app.js
});

app.get("/proxy", (req, res) => {
  fetch("https://google.com")
    .then((response) => response.text())
    .then((html) => {
      res.send(html);
    });
});

const PORT = process.env.PORT ? 3000 : 80;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
