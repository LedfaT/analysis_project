const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_URI, {
  logging: false,
});

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
  User: require("./User")(sequelize, Sequelize),
  Token: require("./Token")(sequelize, Sequelize),
};

module.exports = db;
