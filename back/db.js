const { Sequelize } = require("sequelize");

module.exports = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "Fomik9932",
  port: 5432,
  database: "modal",
});
// new Sequelize({
//   dialect: "postgres",
//   username: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });
