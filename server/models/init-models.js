var DataTypes = require("sequelize").DataTypes;
var _reactQuestion = require("./reactQuestion");
var _users = require("./users");

function initModels(sequelize) {
  var reactQuestion = _reactQuestion(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    reactQuestion,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
