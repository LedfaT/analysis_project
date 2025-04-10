const Sequelize = require("sequelize");
import { DataTypes } from "@sequelize/core";
import Case from "./Case";
import BluetoothModule from "./BluetoothModule";
import CoolingSystem from "./CoolingSystem";
import Motherboard from "./Motherboard";
import powerSupply from "./powerSupply";
import RAM from "./RAM";
import WifiModule from "./WifiModule";

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
  CPU: require("./CPU")(sequelize, Sequelize, DataTypes),
  GNU: require("./GPU")(sequelize, Sequelize, DataTypes),
  HDD: require("./HDD")(sequelize, Sequelize, DataTypes),
  Case: require("./Case")(sequelize, Sequelize, DataTypes),
  BluetoothModule: require("./BluetoothModule")(
    sequelize,
    Sequelize,
    DataTypes
  ),
  CoolingSystem: require("./CoolingSystem")(sequelize, Sequelize, DataTypes),
  Motherboard: require("./Motherboard")(sequelize, Sequelize, DataTypes),
  powerSupply: require("./powerSupply")(sequelize, Sequelize, DataTypes),
  RAM: require("./RAM")(sequelize, Sequelize, DataTypes),
  SSD: require("./SSD")(sequelize, Sequelize, DataTypes),
  WaterCoolingSystem: require("./WaterCoolingSystem")(
    sequelize,
    Sequelize,
    DataTypes
  ),
  WifiModule: require("./WifiModule")(sequelize, Sequelize, DataTypes),
};

module.exports = db;
