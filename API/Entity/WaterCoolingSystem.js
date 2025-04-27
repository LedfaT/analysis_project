module.exports = (sequelize, Sequelize, DataTypes) => {
  const WaterCoolingSystem = sequelize.define(
    "WaterCoolingSystem",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      heat_removal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "water_cooling_system",
    }
  );

  WaterCoolingSystem.associate = (models) => {
    WaterCoolingSystem.hasOne(models.Computer, {
      foreignKey: "water_cooling_system_id",
    });
  };

  return WaterCoolingSystem;
};
