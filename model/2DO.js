// Import orm object
var orm = require("../config/orm.js");

var toDo = {
    all: function(cb){
        orm.all("toDo_tasks", function(res){
            cb(res);
        });
    }
};

module.exports = toDo