const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static("public"));

const port = process.env.PORT || 3001;
app.listen(port, () =>console.log("Servidor corriendo con el puerto ${port}"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/explore.html"));
});
app.get("/feed.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/feed.html"));
});
app.get("/profile.html", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/profile.html"));
});
app.get("/explore.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/explore.html"));
});