'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Companies.init({
    name: DataTypes.STRING,
    membership_type: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Companies',
  });
  return Companies;
};