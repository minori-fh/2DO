// Require dependencies
var express = require("express");
var router = express.Router();

var toDo = require("../model/2DO.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    toDo.all(function(data) {
      var hbsObject = {
        toDo_tasks: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

// Export routes for server.js to use.
module.exports = router;