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
        type: Sequelize.STRING,
        allowNull: false,
      },
      strength: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      sertificate: {
        type: Sequelize.STRING,
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
