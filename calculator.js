const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extened: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function (req, res) {
  var weight = parseFloat(req.body.n1);
  var height = parseFloat(req.body.n2);

  var result = weight / (height * height);

  res.send("your bmi is  " + result);
});

app.listen(4000, function () {
  console.log("server started in port 4000");
});
