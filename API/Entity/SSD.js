module.exports = (sequelize, Sequelize, DataTypes) => {
  const SSD = sequelize.define(
    "SSD",
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
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      radiator_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reading_speed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      write_speed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "sdd",
    }
  );

  SSD.associate = (models) => {
    SSD.hasOne(models.Computer, {
      foreignKey: "ssd_id",
    });
  };

  return SSD;
};
