var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/views", function(req, res) {
  res.sendFile(path.join(__dirname, "viewreservation.html"));
});
app.get("/form", function(req, res) {
  res.sendFile(path.join(__dirname, "form.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
