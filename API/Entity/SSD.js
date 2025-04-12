module.exports = (sequelize, Sequelize, DataTypes) => {
  const SSD = sequelize.define(
    "SSD",
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
      memory_quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      radiator_type: {
        type: Sequelize.STRING,
        allowNull: true,
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
      tableName: "ssd",
    }
  );

  SSD.associate = (models) => {
    SSD.hasOne(models.Computer, {
      foreignKey: "ssd_id",
    });
  };

  return SSD;
};
