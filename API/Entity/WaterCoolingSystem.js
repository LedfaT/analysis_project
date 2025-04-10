module.exports = (sequelize, Sequelize, DataTypes) => {
  const WaterCoolingSystem = sequelize.define(
    "WaterCoolingSystem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      heat_removal: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "water_cooling_system",
    }
  );

  return WaterCoolingSystem;
};
