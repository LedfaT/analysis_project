module.exports = (sequelize, Sequelize, DataTypes) => {
  const HDD = sequelize.define(
    "HDD",
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
      tableName: "hdd",
    }
  );

  return HDD;
};
