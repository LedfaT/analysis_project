module.exports = (sequelize, Sequelize, DataTypes) => {
  const PowerSupply = sequelize.define(
    "PowerSupply",
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
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      strength: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sertificate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "power_supply",
    }
  );

  PowerSupply.associate = (models) => {
    PowerSupply.hasOne(models.Computer, {
      foreignKey: "power_supply_id",
    });
  };

  return PowerSupply;
};
