const express = require("express");
const app = express();
app.use(express.static("public"));

const fs = require("fs"); //dependency that allows us to work with file system
const nav = fs.readFileSync("./public/components/nav.html").toString(); //sync means its pausing the execution of next line before previous is done
const footer = fs.readFileSync("./public/components/footer.html").toString();
const frontPage = fs.readFileSync("./public/pages/frontpage/index.html").toString();
const cheesePage = fs.readFileSync("./public/pages/cheese/cheese.html").toString();

const frontPageFull = nav.replace("%%DOCUMENT_TITLE%%", "Welcome to the cheese zone") + frontPage + footer;
const cheesePageFull = nav.replace("%%DOCUMENT_TITLE%%", "You are in the cheese zone") + cheesePage + footer;

app.get("/", (req, res) => {
  res.send(frontPageFull);
});
app.get("/cheese", (req, res) => {
  res.send(cheesePageFull);
});

app.listen(3000, () => {
  console.log("Server is running on port", 3000);
});
