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
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      type_size: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      heat_removal: {
        type: DataTypes.STRING,
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
