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
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      memory_quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      radiator_type: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      reading_speed: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      write_speed: {
        type: DataTypes.STRING,
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
