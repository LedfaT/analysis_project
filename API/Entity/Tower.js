module.exports = (sequelize, Sequelize, DataTypes) => {
  const Tower = sequelize.define(
    "Tower",
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
      fan_included: {
        type: Sequelize.BOOLEAN,
        default: true,
      },
      type_size: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fan_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "tower",
    }
  );

  Tower.associate = (models) => {
    Tower.hasOne(models.Computer, {
      foreignKey: "tower_id",
    });
  };

  return Tower;
};
