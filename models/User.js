const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  //checkPW require bcrypt
}

User.init(
  {
    //id name email pw
  },
  {
    //hooks sequelize
  }
);

module.exports = User;
