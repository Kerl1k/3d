const sequelize = require("../db");
const { DataType, DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  project: { type: DataTypes.STRING },
});

const Project = sequelize.define("project", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  subdivision: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  file: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
});

User.hasMany(Project);
Project.belongsTo(User);

module.exports = { User, Project };
