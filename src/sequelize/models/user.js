/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      // define association here 
      // cart.belongsTo(models.User, { foreignKey: 'idUser' })
    }
  }
  Users.init({
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fullname: DataTypes.STRING,
    avatar: DataTypes.STRING,
    provider_id: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};