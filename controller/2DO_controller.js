// Require dependencies
var express = require("express");
var router = express.Router();

var toDo = require("../model/2DO.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    toDo.all(function(data) {
      console.log(data.length)
      var hbsObject = {
        toDo_tasks: data
      };
      console.log(hbsObject);r
      res.render("index", hbsObject);
    });
});

router.post("/api/tasks", function(req, res){
  toDo.create([
    "task"
  ], [
    req.body.task
  ], function(result){
    res.json({id : result.insertId});
  });
});

router.put("/api/tasks/:id", function(req, res){
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  toDo.update({
    complete: req.body.complete
  }, condition, function(result){
    if (result.changedRows == 0){
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/tasks/:id", function(req, res){
  var condition = "id = " + req.params.id;

  toDo.delete(condition, function(result){
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;