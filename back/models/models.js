const sequelize = require("../db");
const { DataType, DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  login: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  project: { type: DataTypes.STRING },
});

const Project = sequelize.define("project", {
  id: { type: DataTypes.TEXT, primaryKey: true },
  name: { type: DataTypes.STRING },
  subdivision: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
});

const File = sequelize.define("file", {
  id: { type: DataTypes.TEXT, primaryKey: true },
  name: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.STRING, required: true },
  accessLink: { type: DataTypes.STRING },
  size: { type: DataTypes.STRING, default: "0" },
  path: { type: DataTypes.STRING, default: "" },
  date: { type: DataTypes.DATE, default: Date.now() },
});

User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(File);
File.belongsTo(Project);

module.exports = { User, Project, File };
