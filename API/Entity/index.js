const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");
const Tower = require("./Tower");

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
  User: require("./User")(sequelize, Sequelize, DataTypes),
  Token: require("./Token")(sequelize, Sequelize),
  CPU: require("./CPU")(sequelize, Sequelize, DataTypes),
  GPU: require("./GPU")(sequelize, Sequelize, DataTypes),
  HDD: require("./HDD")(sequelize, Sequelize, DataTypes),
  Tower: require("./Tower")(sequelize, Sequelize, DataTypes),
  BluetoothModule: require("./BluetoothModule")(
    sequelize,
    Sequelize,
    DataTypes
  ),
  CoolingSystem: require("./CoolingSystem")(sequelize, Sequelize, DataTypes),
  Motherboard: require("./Motherboard")(sequelize, Sequelize, DataTypes),
  PowerSupply: require("./powerSupply")(sequelize, Sequelize, DataTypes),
  RAM: require("./RAM")(sequelize, Sequelize, DataTypes),
  SSD: require("./SSD")(sequelize, Sequelize, DataTypes),
  WaterCoolingSystem: require("./WaterCoolingSystem")(
    sequelize,
    Sequelize,
    DataTypes
  ),
  WifiModule: require("./WifiModule")(sequelize, Sequelize, DataTypes),
  Computer: require("./Computer")(sequelize, Sequelize, DataTypes),
};

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
