"use strict";
module.exports = function(app) {
  var calculate_moves = require("../controllers/calculate_moves_controller");

  // Get all available moves route
  app
    .route("/chess/moves/:position")
    .get(calculate_moves.list_all_available_moves);
};

// api/routes/calculate_moves_routes.js
