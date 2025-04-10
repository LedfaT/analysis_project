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
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      socket: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "motherboard",
    }
  );

  return Motherboard;
};
