module.exports = (sequelize, Sequelize, DataTypes) => {
  const HDD = sequelize.define(
    "HDD",
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
      description: {
        type: DataTypes.TEXT,
      },
      memory_quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reading_speed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      write_speed: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
      },
    },
    {
      tableName: "hdd",
    }
  );

  HDD.associate = (models) => {
    HDD.hasOne(models.Computer, {
      foreignKey: "hdd_id",
    });
  };

  return HDD;
};
