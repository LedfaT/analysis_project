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
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      fan_included: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      type_size: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      fan_type: {
        type: DataTypes.SMALLINT,
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
