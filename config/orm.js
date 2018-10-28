var connection = require("../config/connection.js");

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (ob.hasOwnProperty(key)) {
      return key + '=' + ob[key];
    }
  }
}

var orm = {
  all: function (tableInput, _cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      _cb(result);
    });
  },

  insertOne: function (table, col, val, _cb) {
    var queryString = 'INSERT INTO ' + table;

    queryString += ' (';
    queryString += col;
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += '?';
    queryString += ') ';

    connection.query(queryString, val, function (err, result) {
      if (err) throw err;
      _cb(result);
    });
  },

  update: function (table, objColVal, condition, _cb) {
    var queryString = 'UPDATE ' + table;

    queryString += ' SET ';
    queryString += objToSql(objColVal);
    queryString += ' WHERE ';
    queryString += condition;
    
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      _cb(result);
    });
  }
};

module.exports = orm;