module.exports = (sequelize, Sequelize, DataTypes) => {
  const Motherboard = sequelize.define(
    "Motherboard",
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
      chipset: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type_size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      socket: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "motherboard",
    }
  );

  Motherboard.associate = (models) => {
    Motherboard.hasOne(models.Computer, {
      foreignKey: "motherboard_id",
    });
  };

  return Motherboard;
};
