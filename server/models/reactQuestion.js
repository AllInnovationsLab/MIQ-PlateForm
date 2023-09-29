const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reactQuestion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    option1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    option2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    option3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reactQuestion',
    schema: 'public',
    timestamps: false
  });
};
