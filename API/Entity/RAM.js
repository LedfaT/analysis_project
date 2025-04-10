module.exports = (sequelize, Sequelize, DataTypes) => {
  const RAM = sequelize.define(
    "RAM",
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
      memory_quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      memory_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      radiator_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "ram",
    }
  );

  return RAM;
};
