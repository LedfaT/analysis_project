module.exports = (sequelize, Sequelize, DataTypes) => {
  const PowerSupply = sequelize.define(
    "PowerSupply",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      power: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sertificate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "power_supply",
    }
  );

  return PowerSupply;
};
