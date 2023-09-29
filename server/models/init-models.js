var DataTypes = require("sequelize").DataTypes;
var _reactQuestion = require("./reactQuestion");

function initModels(sequelize) {
  var reactQuestion = _reactQuestion(sequelize, DataTypes);


  return {
    reactQuestion,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
