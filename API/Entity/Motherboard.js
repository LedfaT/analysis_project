module.exports = (sequelize, Sequelize, DataTypes) => {
  const Motherboard = sequelize.define(
    "Motherboard",
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
      chipset: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      socket: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "motherboard",
    }
  );

  return Motherboard;
};
