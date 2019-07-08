// Import orm object
var orm = require("../config/orm.js");

var toDo = {
    all: function(cb){
        orm.all("toDo_tasks", function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
    orm.create("toDo_tasks", cols, vals, function(res) {
        cb(res);
    });
    },
    update: function(objColVals, condition, cb) {
    orm.update("toDo_tasks", objColVals, condition, function(res) {
        cb(res);
    });
    },
    delete: function(condition, cb) {
        orm.delete("toDo_tasks", condition, function(res) {
          cb(res);
        });
    }
};

module.exports = toDo