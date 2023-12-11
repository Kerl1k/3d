const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "postgres",
  password: "Fomik9932",
  port: 5432,
  database: "modal",
});

try {
  await sequelize.authenticate();
  console.log("XUI");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
