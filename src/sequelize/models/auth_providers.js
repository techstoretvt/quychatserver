/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth_providers extends Model {
    static associate(models) {
      // define association here
    }
  }
  Auth_providers.init({
    name_provider: DataTypes.STRING,


  }, {
    sequelize,
    modelName: 'Auth_providers',
  });
  return Auth_providers;
};