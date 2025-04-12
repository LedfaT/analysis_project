module.exports = (sequelize, Sequelize, DataTypes) => {
  const CoolingSystem = sequelize.define(
    "CoolingSystem",
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
