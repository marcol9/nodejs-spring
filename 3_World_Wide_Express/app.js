const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Hello weather hahah </h1>");
});

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/public/weather.html");
});

app.listen(8080, () => {
  console.log("server is running on port", 8080);
});
