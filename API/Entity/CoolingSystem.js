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
