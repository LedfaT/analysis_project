module.exports = (sequelize, Sequelize, DataTypes) => {
  const CoolingSystem = sequelize.define(
    "CoolingSystem",
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
      tableName: "cooling_system",
    }
  );

  CoolingSystem.associate = (models) => {
    CoolingSystem.hasOne(models.Computer, {
      foreignKey: "cooling_system_id",
    });
  };

  return CoolingSystem;
};
