module.exports = (sequelize, Sequelize, DataTypes) => {
  const SSD = sequelize.define(
    "SSD",
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
      tableName: "sdd",
    }
  );

  return SSD;
};
