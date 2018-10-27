var orm = require("../config/orm.js");


var burger = {
  all: function(_cb) {
    orm.all("burgers", function(res) {
      _cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(col, val, _cb) {
    orm.insertOne("burgers", col, val, function(res) {
      _cb(res);
    });
  },
  update: function(objColVal, condition, _cb) {
    orm.update("burgers", objColVal, condition, function(res) {
      _cb(res);
    });
  },
  delete: function(conditionVal, _cb){
    orm.delete("burgers", "id", conditionsVal, function(res){
      _cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;