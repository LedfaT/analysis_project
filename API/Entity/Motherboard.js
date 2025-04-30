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
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      chipset: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type_size: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      socket: {
        type: DataTypes.STRING,
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
