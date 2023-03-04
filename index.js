const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./frontend/dist"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("frontend/dist"));
// }

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/frontend/dist", "index.html"));
});
// const filepath = path.resolve(__dirname + "/frontend/dist", "index.html");
// console.log(filepath);

// app.get("/", (req, res) => {
//   res.send("it's working");
// });

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});

module.exports = app;
