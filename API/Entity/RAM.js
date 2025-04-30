module.exports = (sequelize, Sequelize, DataTypes) => {
  const RAM = sequelize.define(
    "RAM",
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
      memory_quantity: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      memory_type: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      radiator_type: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "ram",
    }
  );

  RAM.associate = (models) => {
    RAM.hasOne(models.Computer, {
      foreignKey: "ram_id",
    });
  };

  return RAM;
};
