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
        type: Sequelize.STRING,
        allowNull: true,
      },
      memory_type: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      radiator_type: {
        type: Sequelize.SMALLINT,
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
