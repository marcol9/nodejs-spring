const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/clock.html");
});

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || "5000");
