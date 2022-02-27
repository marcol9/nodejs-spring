const express = require("express");
const app = express();

app.use(express.static("public"));
const fs = require("fs");
const navbar = fs.readFileSync("./public/components/navbar.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString();
const npm = fs.readFileSync("./public/pages/npm/npm.html").toString();
const rest = fs.readFileSync("./public/pages/rest/rest.html").toString();
const ssr = fs.readFileSync("./public/pages/ssr/ssr.html").toString();

const frontpagePage = navbar + frontpage + footer;
const npmPage = navbar + npm + footer;
const restPage = navbar + rest + footer;
const ssrPage = navbar + ssr + footer;

app.get("/", (req, res) => {
  res.send(frontpagePage);
});
app.get("/npm", (req, res) => {
  res.send(npmPage);
});
app.get("/rest", (req, res) => {
  res.send(restPage);
});
app.get("/ssr", (req, res) => {
  res.send(ssrPage);
});

app.listen(3000, () => {
  console.log("server is running on", 3000);
});
