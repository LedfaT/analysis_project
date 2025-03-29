const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URI);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {
  sequelize,
  Sequelize,
  User: require("./userModel")(sequelize, Sequelize),
  Token: require("./tokenModel")(sequelize, Sequelize),
};

module.exports = db;
