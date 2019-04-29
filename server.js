var express = require("express"),
  app = express(),
  port = process.env.PORT || 80,
  bodyParser = require("body-parser"),
  cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require("./api/routes/calculate_moves_routes"); //importing route
routes(app); //register the route
// creates a middleware for routes that aren't available or doesn't exist
app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + " is not a valid route" });
});

module.exports = app.listen(port);
console.log("Api started on port: " + port);

// server.js
